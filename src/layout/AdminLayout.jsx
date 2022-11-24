import React from "react";
import { useRoutes } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";
import Book from "../admin/pages/Book";
import BookAdd from "../admin/pages/BookAdd";
import Setting from "../admin/pages/Setting";
import ViewBook from "../admin/components/BookView";
import BookEdit from "../admin/components/BookEdit";

function AdminLayout() {
  const ElementRoute = useRoutes([
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "allBook",
          element: <Book />,
        },
        {
          path: "allBook/viewBook",
          element: <ViewBook />,
        },
        {
          path: "allBook/eidtBook",
          element: <BookEdit />,
        },
        {
          path: "addBook",
          element: <BookAdd />,
        },
        {
          path: "setting",
          element: <Setting />,
        },
      ],
    },
  ]);
  return ElementRoute;
}

export default AdminLayout;
