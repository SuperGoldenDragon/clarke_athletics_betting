import { View, Text, StyleSheet } from "react-native";
import TeamLogo from "../../components/TeamLogo";
import Teamark1 from '../../assets/images/logos/team-logo-1.png';
import Teamark2 from '../../assets/images/logos/team-logo-2.png';
import GlobalStyles from '../../styles/global';

const ScheduleCard = () => {
    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <Text style={[GlobalStyles.defaultPagePadding, styles.teamNames, { paddingVertical: 5, fontSize: 12 }]} >16.00</Text>
            </View>
            <View style={[GlobalStyles.defaultPagePadding, GlobalStyles.defaultAppbarPadding, { backgroundColor: 'white' }]}>
                <View style={[{ flexDirection: "row", borderWidth: 1, borderColor: '#eee', backgroundColor: 'white', borderRadius: 5, }, GlobalStyles.defaultPagePadding, GlobalStyles.defaultAppbarPadding]}>
                    <View style={{ flexDirection: "row", marginRight: 10, justifyContent: "center" }}>
                        <TeamLogo logo={Teamark1} />
                        <TeamLogo logo={Teamark2} style={{ marginLeft: -10 }} />
                    </View>
                    <View>
                        <Text style={styles.teamNames}>Toronto Raptors VS Detroit Pistons</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "#4B4B4B", fontSize: 12 }}>23 Nov,2023 | </Text>
                            <Text style={{ color: "#B9B9B9", fontSize: 12 }}>Started 11 mins ago</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default ScheduleCard;
const styles = StyleSheet.create({
    teamNames: {
        color: "#22252A",
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: 16,
        maxWidth: "70%"
    },
})