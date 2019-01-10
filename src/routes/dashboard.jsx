// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Assessment from "@material-ui/icons/Assessment";

// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Quiz from "views/Quiz/Quiz.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
import HomeScreen from "../views/HomeScreen/HomeScreen";
import ResultScreen from "../views/ResultScreen/ResultScreen";
import Vocabulary from "../views/Vocabulary/Vocabulary";
import WordScreen from "../views/Vocabulary/WordScreen";
import LearnWordScreen from "../views/Vocabulary/LearnWordScreen";
import Leaderboard from "../views/Leaderboard/Leaderboard";

const dashboardRoutes = [
  {
    path: "/home",
    sidebarName: "Home",
    navbarName: "Home",
    icon: Dashboard,
    component: HomeScreen
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/quiz",
    sidebarName: "Quiz",
    navbarName: "Quiz",
    icon: Person,
    component: Quiz,
    notShow: true
  },
  {
    path: "/result",
    sidebarName: "Result",
    navbarName: "result",
    icon: Person,
    component: ResultScreen,
    notShow: true
  },
  {
    path: "/topic",
    sidebarName: "Topic",
    navbarName: "Topic",
    icon: LibraryBooks,
    component: Vocabulary
  },
  {
    path: "/word",
    sidebarName: "Word",
    navbarName: "Word",
    icon: LibraryBooks,
    component: WordScreen,
    notShow: true
  },
  {
    path: "/learn",
    sidebarName: "Learn",
    navbarName: "Learn",
    icon: Person,
    component: LearnWordScreen,
    notShow: true
  },
  {
    path: "/leaderboard",
    sidebarName: "Leaderboard",
    navbarName: "Leaderboard",
    icon: Assessment,
    component: Leaderboard
  },
  { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

export default dashboardRoutes;
