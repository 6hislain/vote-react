import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/404";
import Contact from "@/pages/Contact";
import Login from "@/pages/auth/Login";
import AddUser from "@/pages/user/Add";
import AllUsers from "@/pages/user/All";
import EditUser from "@/pages/user/Edit";
import ViewUser from "@/pages/user/View";
import AddVote from "@/pages/vote/Add";
import AllVotes from "@/pages/vote/All";
import EditVote from "@/pages/vote/Edit";
import ViewVote from "@/pages/vote/View";
import Dashboard from "@/pages/Dashboard";
import Register from "@/pages/auth/Register";
import AddElection from "@/pages/election/Add";
import AllElections from "@/pages/election/All";
import EditElection from "@/pages/election/Edit";
import ViewElection from "@/pages/election/View";
import AddPosition from "@/pages/position/Add";
import AllPositions from "@/pages/position/All";
import EditPosition from "@/pages/position/Edit";
import ViewPosition from "@/pages/position/View";
import AddCandidate from "@/pages/candidate/Add";
import AllCandidates from "@/pages/candidate/All";
import EditCandidate from "@/pages/candidate/Edit";
import ViewCandidate from "@/pages/candidate/View";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  { index: true, element: <Home /> },
  { path: "about", element: <About /> },
  { path: "login", element: <Login /> },
  { path: "contact", element: <Contact /> },
  { path: "register", element: <Register /> },
  { path: "dashboard", element: <Dashboard /> },
  {
    path: "candidate",
    children: [
      { index: true, element: <AllCandidates /> },
      { path: "add", element: <AddCandidate /> },
      { path: "edit/:candidate", element: <EditCandidate /> },
      { path: "view/:candidate", element: <ViewCandidate /> },
    ],
  },
  {
    path: "election",
    children: [
      { index: true, element: <AllElections /> },
      { path: "add", element: <AddElection /> },
      { path: "edit/:election", element: <EditElection /> },
      { path: "view/:election", element: <ViewElection /> },
    ],
  },
  {
    path: "position",
    children: [
      { index: true, element: <AllPositions /> },
      { path: "add", element: <AddPosition /> },
      { path: "edit/:position", element: <EditPosition /> },
      { path: "view/:position", element: <ViewPosition /> },
    ],
  },
  {
    path: "votes",
    children: [
      { index: true, element: <AllVotes /> },
      { path: "add", element: <AddVote /> },
      { path: "edit/:vote", element: <EditVote /> },
      { path: "view/:vote", element: <ViewVote /> },
    ],
  },
  {
    path: "user",
    children: [
      { index: true, element: <AllUsers /> },
      { path: "add", element: <AddUser /> },
      { path: "edit/:user", element: <EditUser /> },
      { path: "view/:user", element: <ViewUser /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default routes;
