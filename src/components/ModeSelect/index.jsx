import { useColorScheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'


function ModeSelect() {
    const { mode, setMode } = useColorScheme();
    const handleChange = (event) => {
        const selectMode = event.target.value;
        setMode(selectMode);
    };

    return (
        <FormControl size='small'>
            <InputLabel id="dark-light-system-mode">Mode</InputLabel>
            <Select
                labelId="dark-light-system-mode"
                id="demo-simple-select"
                value={mode}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value="light">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: "8px" }}>
                        <LightModeIcon />
                        Light
                    </Box>
                </MenuItem>
                <MenuItem value="dark">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <DarkModeOutlinedIcon />
                        Dark
                    </Box>
                </MenuItem>
                <MenuItem value="system">
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                    }}>
                        <SettingsBrightnessIcon />
                        System
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    );
}

export default ModeSelect;