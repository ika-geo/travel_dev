"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const HeaderFooter_1 = __importDefault(require("./components/headerFooter/HeaderFooter"));
const Home_1 = __importDefault(require("./pages/home/Home"));
const About_1 = __importDefault(require("./pages/about/About"));
const NoPage_1 = __importDefault(require("./pages/NoPage"));
const Tour_1 = __importDefault(require("./pages/tour/Tour"));
const Tours_1 = __importDefault(require("./pages/tours/Tours"));
const Contact_1 = __importDefault(require("./pages/contact/Contact"));
const API_1 = require("./FakeApi/API");
require("../src/assets/style/style.css");
const App = () => {
    return (<react_1.default.StrictMode>
                <react_router_dom_1.HashRouter>
                    <react_router_dom_1.Routes>
                        <react_router_dom_1.Route element={<HeaderFooter_1.default />}>
                           <react_router_dom_1.Route index element={<Home_1.default />}/>
                            <react_router_dom_1.Route path="about" element={<About_1.default />}/>
                            <react_router_dom_1.Route path="tours" element={<Tours_1.default />}/>
                            <react_router_dom_1.Route path="contact" element={<Contact_1.default />}/>
                            {API_1.someApi.map(item => <react_router_dom_1.Route key={item.title} path={item.title} element={<Tour_1.default item={item}/>}/>)}
                            <react_router_dom_1.Route path="*" element={<NoPage_1.default />}/>
                        </react_router_dom_1.Route>
                    </react_router_dom_1.Routes>
                </react_router_dom_1.HashRouter>
        </react_1.default.StrictMode>);
};
exports.default = App;
