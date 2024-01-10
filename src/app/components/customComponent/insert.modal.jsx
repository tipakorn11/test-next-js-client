import React from "react"
import { Button, Dropdown, Dialog, Toast, InputText, Calendar, InputTextarea } from "primereact"
import { Row, Col, Loading, Enum } from "../customComponent"
import DatePicker from "react-multi-date-picker"
import user from "../../assets/image/user.png"
import dateFormat from "../../utils/date-format"
import Swal from "sweetalert2"
import thai from "../../utils/date-thai-calendar/thai"
import thai_th from "../../utils/date-thai-calendar/thai_th"
import { EmployeeModel, AmphuresModel, ProvicesModel, TambonsModel } from "../../models"
const employee_model = new EmployeeModel()
const provinces_model = new ProvicesModel()
const amphures_model = new AmphuresModel()
const tambons_model = new TambonsModel()
class InsertModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      check_ins: 0,
      loading: false,
      header: "เพิ่มพนักงาน",
      dep_option: [],
    }
  }

  componentDidUpdate(props_old) {
    if (!props_old.show && this.props.show) {
      this._fetchData()
    }
  }

  componentDidMount() {
    this._fetchData()
  }

  _fetchData = () =>
    this.setState({ loading: true }, async () => {
      let id = this.props.id
      let employee = await employee_model.getEmployeeById({ employee_table_uuid: id })
      let {
        first_name,
        last_name,
        start_date,
        gender,
        date_of_birth,
        province_id,
        amphures_id,
        tambons_id,
        bureaus_id,
        department_id,
        position_table_uuid,
        position_type_id,
        position_level_id,
        position_number,
        address_table_uuid,
        employee_table_uuid,
      } = employee.data[0] || {}
      let provinces = await provinces_model.getProvincesBy()
      let amphures = await amphures_model.getAmphuresByProvinceId({ province_id })
      let tambons = await tambons_model.getTambonsByIdAmphures({ amphures_id })
      this.setState({
        address_table_uuid,
        employee_table_uuid,
        first_name,
        last_name,
        start_date,
        gender,
        date_of_birth,
        province_id,
        amphures_id,
        tambons_id,
        bureaus_id,
        department_id,
        position_table_uuid,
        position_type_id,
        position_level_id,
        position_number,
        provinces: provinces.data || [],
        amphures: amphures.data || [],
        tambons: tambons.data || [],
        loading: false,
      })
    })
  onPositionTypeChange = (e) => {
    console.log(e)
    let { positionLevelEnum } = Enum
    let position_level_option = positionLevelEnum.filter((item) => item.position_type_id == e)
    this.setState({ position_level_option })
  }
  onBereausChange = (e) => {
    let { departmentEnum } = Enum
    let dep = departmentEnum.filter((item) => item.bureaus_id == e)
    this.setState({ dep_option: dep })
  }
  onProvinces = (e) => {
    const selectProvince = e
    this.setState({}, async () => {
      let amphures = await amphures_model.getAmphuresByProvinceId({
        provinces_id: selectProvince,
      })
      let provinces = await provinces_model.getProvincesBy()
      this.setState({
        provinces: provinces.data,
        province_id: selectProvince,
        amphures: amphures.data,
        selectProvince,
      })
    })
  }
  onAmphures = (e) => {
    const selectAmphures = e
    this.setState({}, async () => {
      let tambons = await tambons_model.getTambonsByIdAmphures({
        amphures_id: selectAmphures,
      })
      this.setState({
        amphures_id: selectAmphures,
        tambons: tambons.data,
      })
    })
  }
  onTambons = (e) => {
    const selectTambons = e
    this.setState({}, async () => {
      let zip_code_data = await tambons_model.getTambonsById({
        id: selectTambons,
      })

      this.setState({
        tambons_id: selectTambons,
        zip_code: zip_code_data.data[0].zip_code,
      })
    })
  }
  formatDateBirthday = (rowData) => {
    let year = new Date().getFullYear() + 543
    let month = new Date().getMonth() + 1
    let numOfDay = new Date().getDate()
    let today = new Date(year + "-" + month + "-" + numOfDay)
    let pickdt = new Date(rowData)

    var timeDiff = Math.abs(today.getTime() - pickdt.getTime())
    var days = Math.floor(timeDiff / (1000 * 3600 * 24))
    var months = Math.floor(days / 30.44)
    var years = Math.floor(months / 12)
    months = months % 12
    days = Math.floor(days % 30.44)
    this.setState({
      age: years,
    })
  }
  formatDateBirthdayShowAge = (rowData) => {
    let year = new Date().getFullYear() + 543
    let month = new Date().getMonth() + 1
    let numOfDay = new Date().getDate()
    let today = new Date(year + "-" + month + "-" + numOfDay)
    let pickdt = new Date(rowData)

    var timeDiff = Math.abs(today.getTime() - pickdt.getTime())
    var days = Math.floor(timeDiff / (1000 * 3600 * 24))
    var months = Math.floor(days / 30.44)
    var years = Math.floor(months / 12)
    months = months % 12
    days = Math.floor(days % 30.44)
    return years
  }
  checkSubmit = () => {
    let {
      first_name,
      last_name,
      start_date,
      gender,
      date_of_birth,
      province_id,
      amphures_id,
      tambons_id,
      bureaus_id,
      department_id,
      position_table_uuid,
      position_type_id,
      position_level_id,
      position_number,
    } = this.state
    if (first_name == "" || first_name == undefined) {
      this.toast.show({
        severity: "warn",
        summary: "โปรดกรอกข้อมูลให้ครบถ้วน",
        detail: "กรุณากรอกข้อมูลชื่อ",
        life: 3000,
      })
      return false
    }
    if (last_name == "" || last_name == undefined) {
      this.toast.show({
        severity: "warn",
        summary: "โปรดกรอกข้อมูลให้ครบถ้วน",
        detail: "กรุณากรอกข้อมูลนามสกุล",
        life: 3000,
      })
      return false
    }
    if (start_date == "" || start_date == undefined) {
      this.toast.show({
        severity: "warn",
        summary: "โปรดกรอกข้อมูลให้ครบถ้วน",
        detail: "กรุณากรอกวันที่เริ่มงาน",
        life: 3000,
      })
      return false
    }
    if (gender == "" || gender == undefined) {
      this.toast.show({
        severity: "warn",
        summary: "โปรดกรอกข้อมูลให้ครบถ้วน",
        detail: "กรุณาเลือกเพศ",
        life: 3000,
      })
      return false
    }
    if (date_of_birth == "" || date_of_birth == undefined) {
      this.toast.show({
        severity: "warn",
        summary: "โปรดกรอกข้อมูลให้ครบถ้วน",
        detail: "กรุณาเลือกวันเกิด",
        life: 3000,
      })
      return false
    }
    if (province_id == "" || province_id == undefined) {
      this.toast.show({
        severity: "warn",
        summary: "โปรดกรอกข้อมูลให้ครบถ้วน",
        detail: "กรุณาเลือกจังหวัด",
        life: 3000,
      })
      return false
    }
    if (amphures_id == "" || amphures_id == undefined) {
      this.toast.show({
        severity: "warn",
        summary: "โปรดกรอกข้อมูลให้ครบถ้วน",
        detail: "กรุณาเลือกอำเภอ",
        life: 3000,
      })
      return false
    }
    if (gender == "" || tambons_id == undefined) {
      this.tambons_id.show({
        severity: "warn",
        summary: "โปรดกรอกข้อมูลให้ครบถ้วน",
        detail: "กรุณาเลือกตำบล",
        life: 3000,
      })
      return false
    }
    if (bureaus_id == "" || bureaus_id == undefined) {
      this.toast.show({
        severity: "warn",
        summary: "โปรดกรอกข้อมูลให้ครบถ้วน",
        detail: "กรุณาเลือกสำนัก",
        life: 3000,
      })
      return false
    }
    if (department_id == "" || department_id == undefined) {
      this.toast.show({
        severity: "warn",
        summary: "โปรดกรอกข้อมูลให้ครบถ้วน",
        detail: "กรุณาเลือกฝ่าย",
        life: 3000,
      })
      return false
    }
    if (position_table_uuid == "" || position_table_uuid == undefined) {
      this.toast.show({
        severity: "warn",
        summary: "โปรดกรอกข้อมูลให้ครบถ้วน",
        detail: "กรุณาเลือกตำแหน่ง",
        life: 3000,
      })
      return false
    }
    if (position_type_id == "" || position_type_id == undefined) {
      this.toast.show({
        severity: "warn",
        summary: "โปรดกรอกข้อมูลให้ครบถ้วน",
        detail: "กรุณาเลือกประเภทตำแหน่ง",
        life: 3000,
      })
      return false
    }
    if (position_type_id == "" || position_type_id == undefined) {
      this.toast.show({
        severity: "warn",
        summary: "โปรดกรอกข้อมูลให้ครบถ้วน",
        detail: "กรุณาเลือกประเภทตำแหน่ง",
        life: 3000,
      })
      return false
    }
    if (position_level_id == "" || position_level_id == undefined) {
      this.toast.show({
        severity: "warn",
        summary: "โปรดกรอกข้อมูลให้ครบถ้วน",
        detail: "กรุณาเลือกระดับตำแหน่ง",
        life: 3000,
      })
      return false
    }
    if (position_number == "" || position_number == undefined) {
      this.toast.show({
        severity: "warn",
        summary: "โปรดกรอกข้อมูลให้ครบถ้วน",
        detail: "กรุณากรอกเลชที่ตำแหน่ง",
        life: 3000,
      })
      return false
    } else {
      return true
    }
  }

  _handleClose = () => this.props.onClose()

  handleSubmit = (e) => {
    e.preventDefault()
    let value_to_use = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      start_date: this.state.start_date,
      date_of_birth: this.state.date_of_birth,
      age: this.state.age,
      gender: this.state.gender,
      address_desc: this.state.address_desc,
      province_id: this.state.province_id,
      amphures_id: this.state.amphures_id,
      tambons_id: this.state.tambons_id,
      zip_code: this.state.zip_code,
      bureaus_id: this.state.bureaus_id,
      department_id: this.state.department_id,
      position_table_uuid: this.state.position_table_uuid,
      position_type_id: this.state.position_type_id,
      position_level_id: this.state.position_level_id,
      position_number: this.state.position_number,
      user_table_uuid: this.state.user_table_uuid,
      address_table_uuid: this.state.address_table_uuid,
      employee_table_uuid: this.state.employee_table_uuid,
    }
    this.checkSubmit() &&
      this.setState({ loading: true }, async () => {
        let res
        this.state.check_ins === 0
          ? (res = await employee_model.insertEmployee(value_to_use))
          : (res = await employee_model.updateEmployeeById(value_to_use))

        if (res.require) {
          this.setState({ loading: false }, () => {
            this.toast.show({ severity: "success", summary: "บันทึกข้อมูลสำเร็จ", detail: "บันทึกข้อมูลสำเร็จ", life: 3000 })
            this._handleClose()
          })
        } else {
          this.setState({ loading: false }, () => {
            this.toast.show({ severity: "warn", summary: "เกิดข้อผิดพลาด", detail: "กรุณาตรวจสอบก่อนบันทึกข้อมูล", life: 3000 })
          })
        }
      })
  }

  render() {
    let { site } = this.state
    return (
      <>
        <Loading show={this.state.loading} />
        <Toast ref={(el) => (this.toast = el)} />
        <Dialog
          className="z-auto"
          header={this.state.header}
          visible={this.props.show}
          style={{ width: "90vh" }}
          onHide={() => this._handleClose()}
          draggable={false}
          footer={() => (
            <>
              <Button severity="primary" className={"m-1"} label="บันทึก" onClick={(e) => this.handleSubmit(e)} />
              <Button severity="secondary" className={"m-1"} label="ยกเลิก" onClick={() => this._handleClose()} />
            </>
          )}
        >
          <div className="flex justify-content-center flex-wrap mt-1">
            <img src={user} className=" h-6rem" />
          </div>
          <Row>
            <Col md={6}>
              <label htmlFor="first_name">ชื่อจริง</label>
              <br />
              <InputText
                className="p-inputtext-sm w-full"
                value={this.state.first_name || ""}
                onChange={(e) => this.setState({ first_name: e.target.value })}
                placeholder="ชื่อจริง"
              />
            </Col>
            <Col md={6}>
              <label htmlFor="last_name">นามสกุล</label>
              <br />
              <InputText
                className="p-inputtext-sm w-full"
                value={this.state.last_name || ""}
                onChange={(e) => this.setState({ last_name: e.target.value })}
                placeholder="นามสกุล"
              />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <label htmlFor="start_date">วันที่เริ่ม</label>
              <br />
              <Calendar
                className="p-inputtext-sm w-full"
                placeholder="วันที่"
                value={this.state.start_date}
                onChange={(e) => this.setState({ start_date: e.value })}
              />
            </Col>
            <Col md={3}>
              <label htmlFor="gender">เพศ</label>
              <br />
              <Dropdown
                value={this.state.gender}
                style={{ height: "2.5rem" }}
                className={"p-inputtext-sm col-12 p-0"}
                options={Enum.gender}
                onChange={(e) => {
                  this.setState({ gender: e.target.value })
                }}
                optionLabel="name"
                optionValue="id"
                placeholder="-"
              />
            </Col>
            <Col md={3}>
              <label htmlFor="date_of_birth">วันเกิด</label>
              <br />
              <DatePicker
                value={dateFormat.toFormat(this.state.date_of_birth, "DD/MM/YYYY")}
                style={{
                  height: "2.5rem",
                  width: "100%",
                  backgroundColor: "white",
                }}
                className="p-inputtext-sm col-12"
                calendar={thai}
                locale={thai_th}
                placeholder="วัน/เดือน/ปี"
                sort
                Single
                onOpenPickNewDate={false}
                monthYearSeparator="  |  "
                showOtherDays
                format="DD/MM/YYYY"
                containerStyle={{
                  width: "100%",
                }}
                onChange={(e) => {
                  this.formatDateBirthday(e?.format?.("YYYY-MM-DD"))
                  this.setState({
                    date_of_birth: e?.format?.("YYYY-MM-DD"),
                  })
                }}
                calendarPosition="bottom-center"
              />
            </Col>
            <Col md={3}>
              <label htmlFor="age">อายุ</label>
              <br />
              <InputText
                style={{ height: "2.5rem" }}
                className={"p-inputtext-sm col-12"}
                inputid="locale-user"
                value={this.formatDateBirthdayShowAge(this.state.age) || 0}
                placeholder="กรอกอัตโนมัติหลังการเลือกวันเกิด"
                onChange={(e) => this.setState({ age: e.target.value })}
                disabled
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <label htmlFor="address_desc">ที่อยู่</label>
              <br />
              <InputTextarea
                id="address_desc"
                value={this.state.address_desc}
                style={{ height: "6.5rem" }}
                className={"w-full"}
                onChange={(e) => {
                  this.setState({ address_desc: e.target.value })
                }}
                placeholder="-"
              />
            </Col>
            <Col md={3}>
              <label htmlFor="provinces_id">จังหวัด</label>
              <br />
              <Dropdown
                value={parseInt(this.state.province_id)}
                style={{ height: "2.5rem" }}
                className={"p-inputtext-sm col-12 p-0"}
                options={this.state.provinces}
                onChange={(e) => {
                  this.onProvinces(e.target.value)
                }}
                optionLabel="name_th"
                optionValue="id"
                placeholder="-"
                filter
              />
              <label htmlFor="tambons_id">ตำบล</label>
              <br />
              <Dropdown
                style={{ height: "2.5rem" }}
                className={"p-inputtext-sm col-12 p-0"}
                value={parseInt(this.state.tambons_id)}
                options={this.state.tambons}
                onChange={(e) => {
                  this.onTambons(e.target.value)
                }}
                optionLabel="name_th"
                optionValue="id"
                placeholder="-"
                filter
              />
            </Col>
            <Col md={3}>
              <label htmlFor="amphures_id">อำเภอ</label>
              <br />

              <Dropdown
                style={{ height: "2.5rem" }}
                className={"p-inputtext-sm col-12 p-0"}
                value={parseInt(this.state.amphures_id)}
                options={this.state.amphures}
                onChange={(e) => {
                  this.onAmphures(e.target.value)
                }}
                optionLabel="name_th"
                optionValue="id"
                placeholder="-"
                filter
              />
              <label htmlFor="latitude">รหัสไปรษณีย์</label>
              <br />
              <InputText
                type="text"
                style={{ height: "2.5rem" }}
                className={"p-inputtext-sm col-12"}
                inputid="locale-user"
                value={this.state.zip_code || ""}
                onChange={(e) => this.setState({ zip_code: e.target.value })}
                placeholder="-"
                disabled
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <label htmlFor="latitude">สำนัก</label>
              <br />
              <Dropdown
                style={{ height: "2.5rem" }}
                className={"p-inputtext-sm col-12 p-0"}
                value={this.state.bureaus_id}
                options={Enum.bureausEnum}
                onChange={(e) => {
                  this.setState({
                    bureaus_id: e.target.value,
                  })
                  this.onBereausChange(e.target.value)
                }}
                optionLabel="name"
                optionValue="id"
                placeholder="-"
              />
            </Col>
            <Col md={6}>
              <label htmlFor="link">ฝ่าย</label>
              <br />
              <Dropdown
                style={{ height: "2.5rem" }}
                className={"p-inputtext-sm col-12 p-0"}
                value={this.state.department_id}
                options={this.state.dep_option}
                onChange={(e) => {
                  this.setState({
                    department_id: e.target.value,
                  })
                }}
                optionLabel="name"
                optionValue="id"
                placeholder="-"
                disabled={this.state.bureaus_id == "" || this.state.bureaus_id == undefined}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <label htmlFor="is_active">ตำแหน่ง</label>
              <br />
              <Dropdown
                style={{ height: "2.5rem" }}
                className={"p-inputtext-sm col-12 p-0"}
                value={this.state.position_table_uuid}
                options={Enum.positionEnum}
                onChange={(e) => {
                  this.setState({
                    position_table_uuid: e.target.value,
                  })
                }}
                optionLabel="name"
                optionValue="id"
                //showClear
                placeholder="-"
              />
            </Col>
            <Col md={6}>
              <label htmlFor="is_active">ประเภทตำแหน่ง</label>
              <br />
              <Dropdown
                style={{ height: "2.5rem" }}
                className={"p-inputtext-sm col-12 p-0"}
                value={this.state.position_type_id}
                options={Enum.positionTypeEnum}
                onChange={(e) => {
                  this.setState({
                    position_type_id: e.target.value,
                  })
                  this.onPositionTypeChange(e.target.value)
                }}
                optionLabel="name"
                optionValue="id"
                //showClear
                placeholder="-"
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <label htmlFor="is_active">ระดับตำแหน่ง</label>
              <br />
              <Dropdown
                style={{ height: "2.5rem" }}
                className={"p-inputtext-sm col-12 p-0"}
                value={this.state.position_level_id}
                options={this.state.position_level_option}
                onChange={(e) => {
                  this.setState({
                    position_level_id: e.target.value,
                  })
                }}
                optionLabel="name"
                optionValue="id"
                disabled={this.state.position_type_id == "" || this.state.position_type_id == undefined}
                placeholder="-"
              />
            </Col>
            <Col md={6}>
              <label htmlFor="is_active">เลขที่ตำแหน่ง</label>
              <br />
              <InputText
                id="longitude"
                style={{ height: "2.5rem" }}
                className={"p-inputtext-sm w-full"}
                value={this.state.position_number || ""}
                onChange={(e) => this.setState({ position_number: e.target.value })}
                placeholder="เช่น. 10-000-01"
              />
            </Col>
          </Row>
        </Dialog>
      </>
    )
  }
}

export default InsertModal
