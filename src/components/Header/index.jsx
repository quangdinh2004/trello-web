import Box from "@mui/material/Box";
import AppsIcon from "@mui/icons-material/Apps";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

import TrelloLogo from '~/assets/trello.svg';
import ModeSelect from "../ModeSelect";
import Wordspaces from "./Menus/Wordspaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import Profiles from "./Menus/Profiles"

function Header() {
    return (
        <Box px={2} sx={{
            height: (theme) => theme.trelloCustomer.heigthHeader,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: 2
            }}>
                <AppsIcon sx={{
                    color: 'primary.main'
                }} />

                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5
                }}>
                    <img src={TrelloLogo} alt="Logo" />
                    <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>Trello</Typography>
                </Box>

                <Wordspaces />
                <Recent />
                <Starred />
                <Templates />

                <Button variant="outlined">Tạo mới</Button>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <Paper
                    component="form"
                    sx={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc' }}
                >
                    <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Tìm kiếm"
                    />
                </Paper>
                <ModeSelect />

                <Tooltip title="Thông báo">
                    <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
                        <NotificationsNoneIcon />
                    </Badge>
                </Tooltip>

                <Tooltip title="Thông tin">
                    <HelpOutlineIcon sx={{ cursor: "pointer" }} />
                </Tooltip>
                <Profiles />
            </Box>
        </Box>
    );
}

export default Header;