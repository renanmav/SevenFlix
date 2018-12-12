import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

const Navigator = createStackNavigator(
  {
    Home,
    MovieDetail
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#2C1F54",
        elevation: 0,
        shadowOpacity: 0
      },
      headerTintColor: "#009AAD",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    },
    headerLayoutPreset: "center"
  }
);

export default createAppContainer(Navigator);
