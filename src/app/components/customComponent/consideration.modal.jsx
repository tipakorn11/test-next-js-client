import React from "react"
import { Button, Dropdown, Dialog, Toast, DataTable, Column } from "primereact"
import { Row, Col, Loading, Enum, Salary } from "../customComponent"
import { EmployeeModel } from "../../models"
const employee_model = new EmployeeModel()
class ConsiderationModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      check_ins: 0,
      loading: false,
      loading_datatable: false,
      header: "พิจารณาเงินเดือน",
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
      this.setState({
        employee: [],
        bureaus_id: "",
        department_id: "",
        loading: false,
        dep_option: Enum.departmentEnum,
      })
    })

  checkSubmit = () => {
    if (this.state.device_name == "" || this.state.device_name === undefined) {
      this.toast.show({ severity: "warn", summary: "โปรดกรอกข้อมูลให้ครบถ้วน", detail: "กรุณากรอกข้อมูลอุปกรณ์", life: 3000 })
      return false
    }
    if (this.state.site_table_uuid == "" || this.state.site_table_uuid === undefined) {
      this.toast.show({ severity: "warn", summary: "โปรดกรอกข้อมูลให้ครบถ้วน", detail: "กรุณาเลือกข้อมูลไซต์งาน", life: 3000 })
      return false
    }
    if (this.state.longitude == "" || this.state.longitude === undefined) {
      this.toast.show({ severity: "warn", summary: "โปรดกรอกข้อมูลให้ครบถ้วน", detail: "กรุณากรอกข้อมูลลองจิจูด", life: 3000 })
      return false
    }
    if (this.state.latitude == "" || this.state.longitude === undefined) {
      this.toast.show({ severity: "warn", summary: "โปรดกรอกข้อมูลให้ครบถ้วน", detail: "กรุณากรอกข้อมูลละติจูด", life: 3000 })
      return false
    } else {
      return true
    }
  }

  _handleClose = () => this.props.onClose()

  handleSubmit = (e) => {
    e.preventDefault()
    let updatedEmployeeList = this.state.employee.map((employee) => {
      // Assuming employee has properties 'new_score' and 'score'
      let newSalary = parseFloat(employee.new_score) + parseFloat(employee.score)
      return { ...employee, salary: newSalary }
    })
    console.log(updatedEmployeeList)
    // this.checkSubmit() &&
    this.setState({ loading: true }, async () => {
      let res = await employee_model.updateEmployeeSalary({ employee_list: updatedEmployeeList })
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
  onBereausChange = (e) => {
    let { departmentEnum } = Enum
    let dep = departmentEnum.filter((item) => item.bureaus_id == e)
    this.setState({ dep_option: dep })
  }
  onDepartmentChange = (e) => {
    this.setState({ loading_datatable: true }, async () => {
      let employee = await employee_model.getEmployeeBy({ department_id: e })
      let new_employee_data = {
        ...employee.data,
        new_score: 0.0,
        new_salary: 0,
      }
      this.setState({ employee: employee.data, department_id: e, loading_datatable: false })
    })
  }
  handleEmployee = (name, e, idx, score_data, salary) => {
    let { employee } = this.state
    employee[idx][name] = e
    let new_salary = (Salary.salary.find((item) => item.score == parseFloat(score_data) + parseFloat(e)) || {}).salary_amount ?? salary
    employee[idx]["new_salary"] = new_salary
    this.setState({ employee })
  }
  positionReveal = (data, type) => {
    if (type == 1) {
      return Enum.positionEnum.find((item) => item.id == data).name ?? "ไม่พบข้อมูล"
    } else if (type == 2) {
      return Enum.positionLevelEnum.find((item) => item.id == data).name ?? "ไม่พบข้อมูล"
    } else {
      return "ไม่พบข้อมูล"
    }
  }
  CalSalary = (score_data, salary, idx) => {}
  render() {
    return (
      <>
        <Loading show={this.state.loading} />
        <Toast ref={(el) => (this.toast = el)} />
        <Dialog
          className="z-auto"
          header={this.state.header}
          visible={this.props.show}
          style={{ width: "155vh" }}
          onHide={() => this._handleClose()}
          draggable={false}
          footer={() => (
            <>
              <Button severity="primary" className={"m-1"} label="บันทึก" onClick={(e) => this.handleSubmit(e)} />
              <Button severity="secondary" className={"m-1"} label="ยกเลิก" onClick={() => this._handleClose()} />
            </>
          )}
        >
          <Row>
            <Col md={3}>
              <label htmlFor="latitude">สำนัก</label>
              <br />
              <Dropdown
                style={{ height: "2.5rem" }}
                className={"p-inputtext-sm col-12 p-0"}
                value={this.state.bureaus_id}
                options={Enum.bureausEnum}
                onChange={(e) => {
                  this.onBereausChange(e.target.value)
                  this.setState({
                    bureaus_id: e.target.value,
                  })
                }}
                optionLabel="name"
                optionValue="id"
                placeholder="-"
              />
            </Col>
            <Col md={3}>
              <label htmlFor="latitude">ฝ่าย</label>
              <br />
              <Dropdown
                style={{ height: "2.5rem" }}
                className={"p-inputtext-sm col-12 p-0"}
                value={this.state.department_id}
                options={this.state.dep_option}
                onChange={(e) => {
                  this.onDepartmentChange(e.target.value)
                }}
                optionLabel="name"
                optionValue="id"
                //showClear
                placeholder="-"
              />
            </Col>
          </Row>
          <DataTable
            value={this.state.employee}
            tableStyle={{ minWidth: "50rem" }}
            selectionMode="single"
            loading={this.state.loading_datatable}
            // selection={this.state.selectedProduct}
            // onSelectionChange={(e) => this.setState({ selectedProduct: e.value })}
            // onRowSelect={this.onRowSelect}

            rows={10}
            rowsPerPageOptions={[10, 20, 30, 50]}
            stripedRows
            globalFilter={this.state.global_filter}
            size="small"
            className={"text-center"}
            emptyMessage=" ไม่พบข้อมูล กรุณาเลือกสำนัก และ ฝ่าย"
          >
            <Column field={(row) => `${row.first_name} ${row.last_name}`} header="ชื่อ-นามสกุล" headerStyle={{ background: "white" }}></Column>
            <Column field={(row) => this.positionReveal(row.position_table_uuid, 1)} header="ตำแหน่ง" headerStyle={{ background: "white" }}></Column>
            <Column
              field={(row) => this.positionReveal(row.position_level_id, 2)}
              header="ระดับตำแหน่ง"
              headerStyle={{ background: "white" }}
            ></Column>
            <Column field={(row) => row.position_number} header="เลขที่ตำแหน่ง" headerStyle={{ background: "white" }}></Column>
            <Column field={(row) => row.salary} header="เงินเดือน" headerStyle={{ background: "white" }} />
            <Column
              field=""
              header="ขั้น"
              body={(row, idx) => {
                return (
                  <Dropdown
                    style={{ height: "2.5rem", width: "4rem" }}
                    className={"p-inputtext-sm col-12 p-0"}
                    value={row.new_score}
                    options={Enum.score}
                    onChange={(e) => this.handleEmployee("new_score", e.value, idx.rowIndex, row.score, row.salary)}
                    pt={{
                      trigger: { className: "hidden" },
                    }}
                    optionLabel="name"
                    optionValue="name"
                    placeholder="-"
                  />
                )
              }}
              headerStyle={{ background: "white" }}
            ></Column>
            <Column
              field=""
              body={(row) => (row.new_salary == 0 ? null : row.new_salary)}
              header="ได้รับเงินเดือน"
              headerStyle={{ background: "white" }}
            ></Column>
          </DataTable>
        </Dialog>
      </>
    )
  }
}

export default ConsiderationModal
