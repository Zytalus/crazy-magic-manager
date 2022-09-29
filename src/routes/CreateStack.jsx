import * as React from 'react';
import {
    Alert,
    AlertTitle,
    Select,
    FormControl,
    MenuItem,
    InputLabel,
    TextField,
    Autocomplete,
    Card,
    CardContent,
    Grid,
    Typography
} from '@mui/material';

import InstanceTypes from '../data/InstanceTypes'

function ShowFreeTierAlert(props) {
    if (props.preset === 1) return (
        <>
            <Alert sx={{ m: 3 }} severity="warning">
                <AlertTitle>Warning</AlertTitle>
                Free Tier assumes no other services are using <strong> ec2, ebs, load balancer, </strong> and downloads are less than <strong> 1 tb per month </strong> for the entire AWS account.
            </Alert>
        </>
    )
}

function PerforceDeploymentSettings(props) {
    return (
        <Card>
            <CardContent sx={{}}>
                <Typography sx={{ fontSize: 14, paddingBottom: 1 }} color="text.secondary" gutterBottom>
                    Perforce Deployment Settings
                </Typography>
                <ShowFreeTierAlert preset={props.state} />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Preset</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={props.state}
                                label="Preset"
                                onChange={props.onChange}
                            >
                                <MenuItem value={0}>Custom</MenuItem>
                                <MenuItem value={1}>Free Tier</MenuItem>
                                <MenuItem value={2}>Big Baller</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ComboBox instanceTypes={InstanceTypes} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField sx={{ width: "100%" }} id="outlined-basic" label="Storage Size" variant="outlined" />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )

}
function PerforceConfigurationSettings(props) {
    return (
        <Card>
            <CardContent sx={{}}>
                <Typography sx={{ fontSize: 14, paddingBottom: 1 }} color="text.secondary" gutterBottom>
                    Perforce Configuration Settings
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <TextField sx={{ width: "100%" }} id="outlined-basic" label="Team Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField sx={{ width: "100%" }} id="outlined-basic" label="Project Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField sx={{ width: "100%" }} id="outlined-basic" label="Admin Username" variant="outlined" />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    )
}
function ComboBox(props) {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={props.instanceTypes}
            renderInput={(params) => <TextField {...params} label="EC2 Instance Type" />}
        />
    );
}

export default function CreateStack() {
    const [deployState, setDeployState] = React.useState('');

    const handleDeployChange = (event) => {
        setDeployState(event.target.value);
    };

    const [configState, setConfigState] = React.useState('');
    const handleConfigChange = (event) => {
        setConfigState(event.target.value);
    };
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <PerforceDeploymentSettings state={deployState} onChange={handleDeployChange} />
                </Grid>
                <Grid item xs={12}>
                    <PerforceConfigurationSettings state={configState} onChange={handleConfigChange} />
                </Grid>
            </Grid>
        </>
    );
};

