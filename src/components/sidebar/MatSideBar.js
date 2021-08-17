import * as React from 'react';
import { styled, useTheme } from '@material-ui/core/styles';
import MuiDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import { changeState } from '../../store/slices/DrawerSlice';
import { drawerWidth } from '../../Config';
import DashBoardIconFigma from '../../assets/icons/dashboard-icon.svg'
import Icon from '@material-ui/core/Icon';
import { useHistory, useLocation } from 'react-router-dom';
import './MatSideBar.css'
const openedMixin = (theme) => ({
    width: drawerWidth,
    
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
const DrawerFooter = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: '0px',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MatSideBar() {
    const theme = useTheme();
    const open = useSelector(state => state.drawer.open)
    const dispatch = useDispatch()
    let history = useHistory()
    let location = useLocation()
    const handleDrawerClose = () => {
        dispatch(changeState(open ? false : true))
    };
    React.useEffect(()=>{
        console.log(location.pathname)
    },[location])
    return (
        <Drawer variant="permanent"  open={open} className="custom-drawer">
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {/* Logo */}
                    {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
          
            <List>
                <ListItem className="custom-list-item" button onClick={()=>{history.push('/dashboard')}} selected={location.pathName == "/dashboard"?true:false}>
                    <ListItemIcon>
                        {/* <DashboardRoundedIcon/> */}
                        {/* <Icon><img src={DashBoardIconFigma}/></Icon> */}
                        <img src={DashBoardIconFigma}/>
                    </ListItemIcon>
                    <ListItemText primary={"Dashboard"} />
                </ListItem>
                <ListItem button onClick={()=>{history.push('/dashboard/ongoing-project-details-view')}} selected={location.pathName == "/dashboard/ongoing-project-details-view"?true:false}>
                    <ListItemIcon>
                        {/* <DashboardRoundedIcon/> */}
                        {/* <Icon><img src={DashBoardIconFigma}/></Icon> */}
                        <img src={DashBoardIconFigma}/>
                    </ListItemIcon>
                    <ListItemText primary={"Projects"} />
                </ListItem>
            </List>
        
          
        </Drawer>
    );
}
