const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Home.vue") },
      {
        path: "creation",
        component: () => import("src/pages/EspaceCreation.vue"),
        children: [
          {
            path: "question",
            component: () =>
              import("src/components/EspaceCreation/CreateQuestionStepper.vue")
          },
          {
            path: "quizz",
            component: () =>
              import("src/components/EspaceCreation/CreateQuizzStepper.vue")
          }
        ]
      },
      {
        path: "ladder",
        component: () => import("src/pages/Ladder.vue")
      },
      {
        path: "about",
        component: () => import("src/pages/About.vue")
      },
      {
        path: "settings",
        component: () => import("src/pages/Settings.vue")
      },
      {
        path: "login",
        component: () => import("src/pages/Login.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
