import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CRow, CCol } from '@coreui/react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

import { Card, CardContent, CardHeader, Divider, List, ListItem, Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}
function ProjectAccordion(props) {
    return (
        <Accordion >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    WASA
                </Typography>
                {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={'Fix 100 Meters'} secondary="Planned End Date Jan 9, 2014" />
                    </ListItem>
                </List>
            </AccordionDetails>
        </Accordion>
    )
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function DraggableSearchResult(props) {
    const [open, setOpen] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Dialog
                maxWidth={"sm"}
                fullWidth={true}
                open={props.open}
                onClose={props.handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
                TransitionComponent={Transition}
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Search Result
                </DialogTitle>

                <DialogContent>
                    <Typography sx={{ fontSize: 14, fontWeight: 'bold', marginBottom: 3 }} color="#000000" >
                        You searched for '{props.searchText}'
                    </Typography>
                    <CRow>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    Golam Kibria Papel
                                </Typography>
                                {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                            </AccordionSummary>
                            <AccordionDetails>
                                <CRow>
                                    <CCol md="6">
                                        <ProjectAccordion/>
                                    </CCol>
                                </CRow>
                                
                            </AccordionDetails>
                        </Accordion>
                    </CRow>

                    {/* <CRow className="mt-2">
                        <Card>
                            <CardContent>
                                <Typography sx={{ fontSize: 14, fontWeight:'bold' }} color="#000000" >
                                    Employees
                                </Typography>
                            </CardContent>
                        </Card>
                    </CRow> */}
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={props.handleClose}>
                        Close
                    </Button>
                    {/* <Button onClick={props.handleClose}>Subscribe</Button> */}
                </DialogActions>
            </Dialog>
        </div>
    );
}
