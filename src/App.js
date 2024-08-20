import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Faq } from "./pages/help/Faq";
import { Contact, contantAction } from "./pages/help/contact";
import { NotFound } from "./pages/NotFound";
import { Careers, careersLoader } from "./pages/careers/Careers";
import {
  CareerDetails,
  careerDetailsLoader,
} from "./pages/careers/CareersDetails";
import { CareerError } from "./pages/careers/CareerError";

// layouts
import { RootLayout } from "./layouts/RootLayout";
import { HelpLayout } from "./layouts/HelpLayout";
import { CareersLayout } from "./layouts/CareersLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} /> {/* index it same the path="/" */}
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contantAction} />
      </Route>
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareerError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
