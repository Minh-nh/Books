import { margin } from '@material-ui/system';
import { makeStyles } from '@mui/styles';

export default makeStyles(()=>({
    root: {
        maxWidth: '80%',
        height: '300px',
        margin:'55px'
    },
    media: {
        height: '150px',
        paddingTop: '100%',
        
    },
    cardContent: {
        textAlign: 'center',
    }
}));