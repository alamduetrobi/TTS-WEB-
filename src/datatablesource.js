import { ReportGmailerrorred } from "@mui/icons-material";

export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "user",
    headerName: "user",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "snow",
    img: "https://picsum.photos/200/300?grayscale",
    status: "inactive",
    email: "abc@ReportGmailerrorred.com",
    age: 35,
  },
  {
    id: 2,
    username: "snow",
    img: "https://picsum.photos/200/300?grayscale",
    status: "active",
    email: "abc@ReportGmailerrorred.com",
    age: 35,
  },
  {
    id: 3,
    username: "snow",
    img: "https://picsum.photos/200/300?grayscale",
    status: "inactive",
    email: "abc@ReportGmailerrorred.com",
    age: 35,
  },
  {
    id: 4,
    username: "snow",
    img: "https://picsum.photos/200/300?grayscale",
    status: "active",
    email: "abc@ReportGmailerrorred.com",
    age: 35,
  },
  {
    id: 5,
    username: "snow",
    img: "https://picsum.photos/200/300?grayscale",
    status: "active",
    email: "abc@ReportGmailerrorred.com",
    age: 35,
  },
];
