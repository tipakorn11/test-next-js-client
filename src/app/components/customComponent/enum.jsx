export const isactiveEnum = [
  { id: 1, name: "ใช้งาน" },
  { id: 2, name: "ไม่ใช้งาน" },
]
export const score = [
  { id: 1, name: 0.5 },
  { id: 2, name: 1.0 },
]
export const gender = [
  { id: 1, name: "ชาย" },
  { id: 2, name: "หญิง" },
  { id: 3, name: "ไม่ระบุ" },
]

export const bureausEnum = [
  { id: 1, name: "สำนักปลัดองค์การบริหารส่วนจังหวัด (นักบริหารงานทั่วไป ระดับกลาง)" },
  { id: 2, name: "สำนักงานเลขานุการองค์การบริหารส่วนจังหวัด (นักบริหารงานทั่วไป ระดับกลาง)" },
  { id: 3, name: "กองยุทธศาสตร์และงบประมาณ (นักบริหารงานทั่วไป ระดับกลาง)" },
  { id: 4, name: "สำนักคลัง (นักบริหารงานการคลัง ระดับสูง)" },
  { id: 5, name: "สำนักช่าง (นักบริหารงานช่าง ระดับสูง)" },
  { id: 6, name: "กองสาธารณสุข นักบริหารงานสาธารสุขและสิ่งแวดล้อม ระดับกลาง" },
  { id: 7, name: "สำนักการศึกษา ศาสนาและวัฒนธรรม นักบริหารงานการศึกษา ระดับสูง" },
  { id: 8, name: "กองสวัสดิการสังคม นักบริหารงานสวัสดิการสังคม ระดับกลาง" },
  { id: 9, name: "กองการเจ้าหน้าที่ นักบริหารงานทั่วไป ระดับกลาง" },
]

export const departmentEnum = [
  { id: 1, bureaus_id: 1, name: "ฝ่ายอำนวยการ" },
  { id: 2, bureaus_id: 1, name: "ฝ่ายนิติการ" },
  { id: 3, bureaus_id: 1, name: "ฝ่ายส่งเสริมการท่องเที่ยว" },
  { id: 4, bureaus_id: 1, name: "ฝ่ายประสานงานองค์กรปกครองส่วนท้องถิ่น" },
  { id: 5, bureaus_id: 1, name: "ฝ่ายป้องกันและบรรเทาสาธารณภัย" },
  { id: 6, bureaus_id: 2, name: "ฝ่ายกิจการสภา" },
  { id: 7, bureaus_id: 2, name: "ฝ่ายการประชุม" },
  { id: 8, bureaus_id: 2, name: "ฝ่ายส่งเสริมการมีส่วนร่วมของประชาชน" },
  { id: 9, bureaus_id: 3, name: "ฝ่ายวิเคราะห์นโยบายและแผน" },
  { id: 10, bureaus_id: 3, name: "ฝ่ายงบประมาณ" },
  { id: 11, bureaus_id: 3, name: "ฝ่ายตรวจติดตามและประเมินผล" },
  { id: 12, bureaus_id: 3, name: "ฝ่ายสถิติข้อมูลและสารสนเทศ" },
  { id: 13, bureaus_id: 3, name: "งานธุรการ" },
  { id: 14, bureaus_id: 4, name: "ฝ่ายบริหารงานทั่วไป" },
  { id: 15, bureaus_id: 4, name: "ฝ่ายการเงิน" },
  { id: 16, bureaus_id: 4, name: "ฝ่ายบัญชี" },
  { id: 17, bureaus_id: 4, name: "ฝ่ายพัฒนารายได้" },
  { id: 18, bureaus_id: 4, name: "ฝ่ายบำเหน็จบำนาญ" },
  { id: 19, bureaus_id: 4, name: "ฝ่ายจัดหาพัสดุ" },
  { id: 20, bureaus_id: 4, name: "ฝ่ายทะเบียนทรัพย์สิน" },
  { id: 21, bureaus_id: 4, name: "ฝ่ายบริหารสัญญา" },
  { id: 22, bureaus_id: 5, name: "ฝ่ายบริหารงานทั่วไป" },
  { id: 23, bureaus_id: 5, name: "ฝ่ายสำรวจ" },
  { id: 24, bureaus_id: 5, name: "ฝ่ายออกแบบ" },
  { id: 25, bureaus_id: 5, name: "ฝ่ายก่อสร้างและซ่อมบำรุง" },
  { id: 26, bureaus_id: 5, name: "ฝ่ายเครื่องจักรกล" },
  { id: 27, bureaus_id: 5, name: "ฝ่ายจัดการมูลฝอยและสิ่งปฏิกูล" },
  { id: 28, bureaus_id: 5, name: "ฝ่ายจัดการคุณภาพน้ำ" },
  { id: 29, bureaus_id: 6, name: "ฝ่ายส่งเสริมสาธารณสุข" },
  { id: 30, bureaus_id: 6, name: "ฝ่ายบริการสาธารณสุข" },
  { id: 31, bureaus_id: 6, name: "ฝ่ายป้องกันและควบคุมโรค" },
  { id: 32, bureaus_id: 6, name: "งานธุรการ" },
  { id: 33, bureaus_id: 7, name: "ฝ่ายบริหารงานทั่วไป" },
  { id: 33, bureaus_id: 7, name: "ฝ่ายวิชาการ" },
  { id: 34, bureaus_id: 7, name: "ฝ่ายส่งเสริมคุณภาพการศึกษา" },
  { id: 35, bureaus_id: 7, name: "ฝ่ายการศึกษาในระบบ" },
  { id: 36, bureaus_id: 7, name: "ฝ่ายการศึกษานอกระบบและตามอัธยาศัย" },
  { id: 37, bureaus_id: 7, name: "ฝ่ายส่งเสริมศาสนา ศิลปะและวัฒนธรรม" },
  { id: 38, bureaus_id: 7, name: "ฝ่ายส่งเสริมกีฬาและนันทนาการ" },
  { id: 39, bureaus_id: 7, name: "หน่วยงานศึกษานิเทศก์" },
  { id: 40, bureaus_id: 7, name: "โรงเรียนในสังกัด จำนวน  ๕๘ แห่ง" },
  { id: 41, bureaus_id: 8, name: "ฝ่ายบริหารงานทั่วไป" },
  { id: 42, bureaus_id: 8, name: "ฝ่ายสังคมสงเคราะห์" },
  { id: 43, bureaus_id: 8, name: "ฝ่ายส่งเสริมสวัสดิการสังคม" },
  { id: 44, bureaus_id: 8, name: "ฝ่ายส่งเสริมและพัฒนาอาชีพ" },
  { id: 45, bureaus_id: 8, name: "ฝ่ายสถานสงเคราะห์" },
  { id: 46, bureaus_id: 9, name: "ฝ่ายสรรหาและบรรจุแต่งตั้ง" },
  { id: 47, bureaus_id: 9, name: "ฝ่ายส่งเสริมและพัฒนาบุคลากร" },
  { id: 48, bureaus_id: 9, name: "ฝ่ายวินัยและส่งเสริมคุณธรรม" },
]

export const positionEnum = [
  { id: 1, name: "นิติกร" },
  { id: 2, name: "นักจัดการทั่วไป" },
  { id: 3, name: "นักบริหารงานทั่วไป" },
  { id: 4, name: "เจ้าพนักงานธุรการ" },
]

export const positionTypeEnum = [
  { id: 1, name: "ทั่วไป" },
  { id: 2, name: "วิชาการ" },
  { id: 3, name: "อำนวยการ" },
  { id: 4, name: "บริหาร" },
]

export const positionLevelEnum = [
  { id: 1, position_type_id: 1, name: "ประเภททั่วไป ระดับปฏิบัติงาน" },
  { id: 2, position_type_id: 1, name: "ประเภททั่วไป ระดับชำนาญงาน" },
  { id: 3, position_type_id: 1, name: "ประเภททั่วไป ระดับอาวุโส" },
  { id: 4, position_type_id: 2, name: "ประเภทวิชาการ ระดับปฏิบัติการ" },
  { id: 5, position_type_id: 2, name: "ประเภทวิชาการ ระดับชำนาญการ" },
  { id: 6, position_type_id: 2, name: "ประเภทวิชาการ ระดับชำนาญการพิเศษ" },
  { id: 7, position_type_id: 2, name: "ประเภทวิชาการ ระดับเชี่ยวชาญ" },
  { id: 8, position_type_id: 3, name: "ประเภทอำนวยการท้องถิ่น ระดับต้น" },
  { id: 9, position_type_id: 3, name: "ประเภทอำนวยการท้องถิ่น ระดับกลาง" },
  { id: 10, position_type_id: 3, name: "ประเภทอำนวยการท้องถิ่น ระดับสูง" },
  { id: 11, position_type_id: 4, name: "ประเภทบริหารท้องถิ่น ระดับต้น" },
  { id: 12, position_type_id: 4, name: "ประเภทบริหารท้องถิ่น ระดับกลาง" },
  { id: 13, position_type_id: 4, name: "ประเภทบริหารท้องถิ่น ระดับสูง" },
]
