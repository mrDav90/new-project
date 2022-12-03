import React , {useState} from 'react';
import './MySpace.scss'
import {
	LogoutOutlined,
	MenuFoldOutlined,
	MenuOutlined,
	MenuUnfoldOutlined,
	SettingOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
import { Avatar, Breadcrumb, Dropdown, Layout, Menu, message } from 'antd';
import logo from "./../../assets/logo.png";
import { useNavigate } from 'react-router';

const { Header, Sider, Content } = Layout;

const MySpace = () => 
{
	const navigate = useNavigate();
	const [collapsed, setCollapsed] = useState(false);
	const [currentSelectedKeys , setCurrentSelectedKeys] = useState("home");
	const  logout = () => {
        // sessionStorage.removeItem("access_token");
        navigate("/" , {replace : true});
        message.success("Déconnexion éffectuée avec succès");
    }
	const logoContent = (
        <div className="logo" style={{height:'5vh', display:'flex' , justifyContent:'center' , alignItems:'center'}}>
            <img src={logo} alt="logo" style={{width:'40px',height:'40px' ,borderRadius:'50%',padding:'2%'}}  />
        </div> 
    );
	const menu = (
        <Menu 
			items={[
				{
					key : 1 ,
					icon : <UserOutlined /> ,
					label : "Mon compte" ,
				} ,
				{
					key : 2 ,
					icon : <SettingOutlined /> ,
					label : "Paramètres" ,
				} ,
				{
					key : 3 ,
					icon : <LogoutOutlined /> ,
					label : "Déconnexion" ,
					onClick : logout
				} ,
			]}
		
		/>
    );
	return(
		<div className="MySpaceWrapper">
				<Layout >
					<Header className="header" style={{display:"flex", padding : "0 30px" , justifyContent: "space-between", alignItems:"center",borderBottom:"solid 1px rgba(222, 222, 222, 0.5)",backgroundColor:"white"}} >
					<div style={{display:"flex",alignItems:"center"}} >
						<MenuOutlined onClick={()=>{setCollapsed(!collapsed)}} style={{fontSize:18,cursor:"pointer"}} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						{/* { 
							logoContent
						} */}

						<div>Mon logo</div>
					</div>	
					<div>
						<Dropdown overlayStyle={{width:'10rem'}} overlay={menu} placement="bottomRight" >
							<Avatar icon={<UserOutlined/>} style={{ cursor:'pointer' , marginLeft:'1rem'}} />     
						</Dropdown> 
					</div>
					</Header>
					<Layout>
						{
							window.screen.width >=992 ?
							<Sider  theme='light' width={200} collapsed={collapsed}  className="site-layout-background">
								<Menu
									theme="light"
									mode="inline"		
									defaultSelectedKeys={["home"]}
									setSelectedKeys={[currentSelectedKeys]}
									style={{border:"none"}}
									items={[
										{
										key: 'home',
										icon: <UserOutlined />,
										label: 'Accueil',
										onClick : (e)=>{setCurrentSelectedKeys(e.key)}
										},
										{
										key: 'data',
										icon: <VideoCameraOutlined />,
										label: 'Mes données',
										onClick : (e)=>{setCurrentSelectedKeys(e.key)}
										},
									]}
								/>
							</Sider>
							:
							<Menu
								theme="light"
								mode="horizontal"
								defaultSelectedKeys={["home"]}
								setSelectedKeys={[currentSelectedKeys]}
								style={{border:"none"}}
								items={[
									{
									key: 'home',
									icon: <UserOutlined />,
									label: 'Accueil',
									onClick : (e)=>{setCurrentSelectedKeys(e.key)}
									},
									{
									key: 'data',
									icon: <VideoCameraOutlined />,
									label: 'Mes données',
									onClick : (e)=>{setCurrentSelectedKeys(e.key)}
									},
								]}
							/>

						}
					
					<Layout>					
						<Content
						className="site-layout-background"
						style={{
							padding: 24,
							margin: 0,
							//minHeight: 280 ,
							maxHeight : "90vh" ,
							position : "sticky",
							overflow : "auto"
						}}
						>
						<p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
						<p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
						<p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
						<p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
						<p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
						</Content>
					</Layout>
					</Layout>
				</Layout>
		</div>
	)
}

export default MySpace


		