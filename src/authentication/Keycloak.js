import Keycloak from "keycloak-js";
import kc_data from '../data/KeyCloakConfigData'

const kc = new Keycloak(kc_data);

export default kc;
