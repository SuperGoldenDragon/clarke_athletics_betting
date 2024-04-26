import { Image } from "react-native";
import DefaultLogo from '../assets/images/logos/team-logo-1.png';

const TeamLogo = (props) => {

    const { logo, style, ...rest } = props;

    return (
        <Image source={logo || DefaultLogo} style={{ ...style, width: 30, height: 30, borderRadius: 30 }} {...rest} />
    );
};

export default TeamLogo;