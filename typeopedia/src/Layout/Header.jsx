import  logo from '../Images/react.png';

export default function Header() {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
}
// #region Header Section
const SubHeaderStyle = {
  backgroundColor: "gray",
  color: "cyan",
};

const MainHeader=()=> {
  return(
  <div className="bg-dark px-2 container-fluid">
     <img className="" src={logo} alt="React Image" width="40" heigth="30"/>
     <h1 style={{display:"inline-block"}} className="heading px-4">React-App TaskOpedia</h1>
  </div>)
}
const SubHeader=()=>{
  return <p style={SubHeaderStyle} className="text-center">This content is really helpful</p>;
}
// #endregion
