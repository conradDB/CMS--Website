# CMS Systems — current website: full content extract

Everything below was read directly from the live site at `https://www.cmssystems.co.za` and its public API. It is a faithful extract of the existing site, intended as source material.

---

## 1. Company facts

| Field | Value |
| --- | --- |
| Legal entity | Customer Management Solutions (Pty) Ltd |
| Trading name | CMS Systems |
| Founded | 1999 |
| Sector | Cloud software for the automotive retail industry |
| Products | Dealership lead management, CRM and related modules |
| Phone | 0861 999 609 (+27 861 999 609) |
| Head office | Unit 4, Cambridge Office Park, 5 Bauhinia Street, Highveld Techno Park, Centurion, 0159 |
| Cape Town office | Unit B205, Octo Place, 5 Electron Road, Techno Park, Stellenbosch, 7600 |
| Email — sales | sales@cmssystems.co.za |
| Email — support | support@cmssystems.co.za |
| Email — training | training@cmssystems.co.za |
| Email — campaigns | campaigns@cmssystems.co.za |
| LinkedIn | https://www.linkedin.com/company/5283645/ |
| Facebook | https://www.facebook.com/CustomerManagementSolutions |
| MENA reseller | Information Systems Ltd. (ISL), https://isl.com.mt/ |

**Brand promise:** "Smarter tools. Easy integration. Better results."

## 2. Site map

| Page | URL |
| --- | --- |
| Home | /index.html |
| Sales Cloud | /SalesCloud.html |
| Lead Management | /LeadManagement.html |
| Stock Management | /StockManagement.html |
| Workshop Management | /WorkshopManagement.html |
| Relationship Management | /CustomerRelationshipManagement.html |
| Reporting | /Reporting.html |
| Fleet Management | /FleetManagement.html |
| Valuation Management | /ValuationManagement.html |
| OEM Analytics & Targets | /OEMAnalyticsTargets.html |
| Legal Notice / Privacy / POPIA | /legal.html |
| PAIA Manual (PDF, 27pp) | /assets/pdf/CMS_PAIA_MANUAL.pdf |

## 3. Homepage content

- CMS Systems is a market leader in cloud-based software solutions for the automotive industry, providing all in one dealership customer management solutions.
- The Automotive Industry is ever evolving, and we endeavour to provide practical solutions to assist dealerships to optimise, control, maintain and manage their services in the best way possible.
- Want to streamline
- your sales process and increase productivity?
- CMS Sales Cloud is the perfect solution!
- Stop wasting time on tedious admin tasks.
- And focus on selling with our CMS Sales Cloud’s mobile app.
- Are you ready to
- take your sales team
- to the next level?
- Our CMS Sales Cloud provides the tools and insights you need to succeed.
- CMS Cloud Reporting
- Offers comprehensive and customised reporting measuring activity and ROI in a live and dynamically generated report dashboard, accessible from anywhere.
- ACTIVE FLOORS TODAY
- BRAND REPRESENTATION
- ISL RESELLER PARTNER
- CMS Systems is proud to partner with Information Systems Ltd. (ISL) as our exclusive reseller for the Middle East and North Africa (MENA) region. Leveraging ISL’s deep local expertise and strong presence in the region, this partnership enables CMS Systems to deliver our innovative cloud-based automotive solutions—such as CMS Sales Cloud and CMS Stock Management—to dealerships across MENA. Together, we aim to empower dealerships with tools that streamline operations, enhance customer experiences, and drive growth, strengthening our commitment to innovation and excellence in the automotive industry.
- COLLABORATIONS
- CMS Sales Solutions integrate seamlessly with the dealership management tools known and used in the Automotive industry. Integration available for best in class DMS, inventory and financial service platforms.
- CMS Systems is a market leader in cloud-based software solutions for the automotive industry, providing all in one dealership customer management solutions.
- Founded in 1999, CMS has become one of the most trusted suppliers of Lead Management and CRM solutions for Dealerships, due to our enduring mission, to invest in breakthrough technology solutions for the Automotive Retail sector.
- The CMS Sales Solutions ensure all prospects are attracted, captured, and followed up effectively, increasing test drives and all other actions that have been proven to increase sales.
- All our partners are backed up by a team of automotive and software experts, focused on simplicity, ensuring their dealership has the best tools to close more deals in less time. Along with solutions for managing and growing dealership customer loyalty.
- The Automotive Industry is ever evolving, and we endeavour to provide practical solutions to assist dealerships to optimise, control, maintain and manage their services in the best way possible.
- FOR TRAINING ON OUR SYSTEM, CONTACT US.
- GET IN TOUCH
- Head Office
- Unit 4, Cambridge Office Park,
- 5 Bauhinia Street,
- Highveld Techno Park,
- Centurion,
- 0159
- View Google Map
- Cape Town
- Unit B205, Octo Place, 5 Electron Road,
- Techno Park,
- Stellenbosch,
- 7600
- View Google Map
- Product Support
- Tel:+27 861 999 609
- Email:
- sales@cmssystems.co.za
- training@cmssystems.co.za
- campaigns@cmssystems.co.za
- &copy; Copyright
- CMS Systems 2026
- . All Rights Reserved |
- Privacy Policy
- POPIA
- PAIA

### Live counters on the homepage

The homepage calls a public CMS endpoint and renders two figures from it:

```
GET https://webcountsapi.cmssystems.co.za/api/Extract/GetDailyExtract
→ "21905,7161"      (totalUsers, activeFloors)
```
It returns a quoted CSV pair, responds in well under a second and sends `Access-Control-Allow-Origin: *`. Note that the current site **renders only the second figure** ("Active floors today") — the total-users value is commented out in the HTML.

## 4. Product modules (9)

Each section below is the real copy from that product page.

### 4.1 Sales Cloud

*Page:* `/SalesCloud.html`

**Empower Your Sales Team. Close More Deals. Drive Real Results.**

End-to-end sales journey, all in one system: from first enquiry through quoting, digital deal file and delivery, with the whole floor working off the same record.

**Key capabilities**

- Electronic Sales Lead Management
- Sales Executive Dashboard
- CMS Mobile Activity Management
- Mobile application for Test Drive bookings
- Prospect creation from Driver’s Licence Card scanning

**Features**

- **Quoting & Deal Structuring** — Create professional, CI-aligned sales quotes in seconds — for single units or multi-vehicle fleet deals. Use real-time stock data, apply trade-ins, discounts, and generate compliant Offers to Purchase (OTPs) / Vehicle Orders effortlessly.
- **Digital Deal File & Electronic Signatures** — Eliminate paperwork and streamline compliance with fully digital deal files. All documents are auto-generated, electronically signed via a secure digital document signing system, and stored securely in the CMS Vault — fully POPIA-compliant.
- **Seamless DMS & F&I Integration** — Connect directly to your Dealer Management System (DMS) and Finance & Insurance platforms. Submit deals, track approvals, and update statuses — all from within CMS Sales Cloud. Integrates with Keyloop, Auto IT, Evolve, and others.
- **Mobile Sales Functionality** — Empower your salespeople on the go. Access stock lists, prospect records, book test drives, scan IDs, and update follow-ups — all from a mobile device.
- **Sales Performance Dashboards** — Track activity, appointments, test drives, follow-ups, lost sales, and delivery timelines in real time. Visual dashboards give Sales Managers full visibility to coach and drive performance.
- **Integrated Communication** — Communicate directly with prospects via WhatsApp, email, or phone — all logged on the customer profile. No need to switch platforms or lose track of conversations.
- **Lifecycle Sales Management** — From lead conversion to delivery and aftersales handoff, every interaction is logged and visible. Maintain momentum, reduce admin, and keep the customer experience smooth and consistent.

**Why choose CMS Sales Cloud?**

- Boost sales efficiency with one connected system
- Enable mobility and speed for your sales floor
- Ensure compliance with built-in digital deal file workflows
- Improve sales team visibility, accountability, and results
- Integrated with your CRM, LMS, DMS, and more

### 4.2 Lead Management

*Page:* `/LeadManagement.html`

**Turn More Leads Into Sales — Faster, Smarter, Seamlessly.**

With CMS Lead Management (LMS), every enquiry is automatically captured, assigned, and tracked — giving your dealership or call centre the power to convert more leads, more efficiently. Whether leads come from OEMs, dealer websites, third-party portals, or marketing campaigns, CMS ensures nothing is missed and everything is measurable.

**Key capabilities**

- Ideal application for agent call center or virtual call center
- Integrate with any web service to fetch and push electronically generated leads
- Mobile application available for “on-the-move” lead management
- Fully integrated with Logimeter CallConnect
- Turn More Leads Into Sales — Faster, Smarter, Seamlessly

**Features**

- **Module (LMS)** — Ideal application for agent call center or virtual call center.
- **Real-Time Lead Injection** — Integrate with all major lead sources — including OEM platforms, third-party sites, campaign landing pages, QR codes, and more. Leads flow into the system the moment they're received, enabling instant action.
- **Smart Lead Distribution** — Use intelligent auto-allocation rules like round-robin, floor-based routing, or custom logic. Assign leads fairly and quickly to the right salesperson or call centre agent, with full tracking and accountability.
- **Instant Prospect Creation & Full Contact History** — Leads are automatically converted into prospect profiles within the CMS Sales Cloud — with every call, message, and action logged. Integrated voice recording via Logimeter and WhatsApp messages are stored on the customer record.
- **Comprehensive Source & Agent Reporting** — Measure lead source performance, contact-to-conversion ratios, agent or sales floor responsiveness, and more. Use real-time dashboards to make data-driven decisions and optimise your marketing ROI.
- **Fully Integrated with Sales Cloud & CRM** — Leads move directly into your existing CMS ecosystem, access through CMS One Login, — no duplication, no double entry. Sales teams and call centre agents can follow up, quote, and update in one unified system.
- **Whatsapp & Click-To-Call Communication** — Call centre agents and salespeople can engage leads instantly through WhatsApp or call connect, all from within the system. Every interaction is tracked and visible.

**Why choose CMS Lead Management?**

- Never miss a lead — from any digital source
- Built for dealerships and high-volume call centres
- Respond instantly and improve conversion rates
- Track team performance and lead quality with precision
- Fully integrated with CMS CRM and Sales Cloud

### 4.3 Stock Management

*Page:* `/StockManagement.html`

**Total Stock Control. Real-Time Visibility. Smarter Sales.**

The CMS Stock Management Solution gives your dealership complete control over inventory — across branches, sales floors, and online channels. With mobile-enabled tools, automated stock updates, and powerful integrations, your team can manage, track, and advertise stock more efficiently than ever before.

**Key capabilities**

- Realtime stock query interface with dealership DMS
- Unique QR code generated per stock unit
- Multiple mobile users in same Stock Take session
- All vehicles allocated and tracked by geolocation pins
- Comprehensive Stock Take Auditable Reporting

**Features**

- **Centralised Stock View** — Access and manage real-time inventory across all dealerships and group locations. Filter by dealer, make, model, price, or location — all from one unified dashboard.
- **Mobile Stock Take App** — Scan VINs, license discs, or QR codes directly from a mobile device. Log vehicle locations, images, and conditions instantly. Pinpoint vehicles on-site using geo-tagging to verify physical stock.
- **Stock Publishing & Online Advertising** — Push available units directly to your website, dealer portals, and 3rd-party marketplaces like Carfind, AutoTrader, Cars.co.za, and more — fully integrated with lead capture.
- **Silent Salesman QR Code Feature** — Print and display QR codes on showroom vehicles. Customers can scan to view full vehicle details, request a test drive, or submit an enquiry — which auto-creates a lead in the CMS system.
- **Stock Movement & Demo Control** — Track all vehicle movements, demo activity, loan cars, and key control. Keep records of who moved which vehicle, when, and why — improving accountability and reducing loss.
- **Traffic Fine Management & Driver History** — Log drivers assigned to test drives or loan vehicles and manage fine allocation with clear records and traceability.
- **Stock Audit & Reporting** — Run detailed stock audits with user accountability, visual variance flags, and date/time-stamped history. Quickly identify sold but uncollected units, mismatched locations, or missing vehicles.

**Why choose CMS Stock Management?**

- Real-time stock accuracy across all locations
- Faster sales through live visibility and publishing
- Mobile-driven stock take & showroom interaction tools
- Reduce loss, improve traceability, and streamline stock audits
- Fully integrated with CMS Sales Cloud, CRM, and Marketing Tools

### 4.4 Workshop Management

*Page:* `/WorkshopManagement.html`

**Seamless Service. Smarter Operations. Satisfied Customers.**

Enables dealer workshops to streamline the vehicle service process effectively. Starting with booking a vehicle in for a service, either online or in person, and then manages the entire process right through to the concluding CSI follow up call.

**Features**

- **Online & In-Dealership Booking Integration** — Enable customers to book services online or through your call centre, with instant visibility on the workshop calendar. Reduce double bookings, missed appointments, and manual processes.
- **Technician Scheduling & Job Card Management** — Assign, track, and manage technician workloads with intuitive planning tools and real-time updates. Track every step of the service process from booking to completion.
- **Tablet-Based Vehicle Check-In & Inspection App** — Use the CMS Inspection App to guide service advisors through a structured check-in and condition recording process. Capture photos, scan license discs, and log findings — all synced to the customer profile.
- **Live Customer Communication & Updates** — Keep your customers informed with WhatsApp, SMS, or email notifications. From check-in confirmations to progress updates and additional repair approvals — every interaction is recorded and tracked.
- **Service Dashboards & Performance Insights** — Monitor workshop performance in real time with live dashboards. Track technician productivity, job statuses, customer feedback, and turnaround times — all in one place.
- **Carry-Over Job Management & Audit Trail** — Easily manage carry-over work with full visibility on outstanding items. Every action is logged, creating a complete audit trail for compliance, accountability, and reporting.
- **Aftersales Customer Satisfaction Tracking** — Automatically trigger CSI feedback requests post-service via WhatsApp Bot. Capture customer sentiment, resolve concerns early, and improve retention with actionable insights.

**Why choose CMS Workshop Management?**

- Increase workshop efficiency and throughput
- Enhance customer experience with real-time updates
- Eliminate manual paperwork and reduce errors
- Drive repeat business with post-service engagement
- Run Your Workshop with Precision — One Login. One System. Total Control

### 4.5 Relationship Management

*Page:* `/CustomerRelationshipManagement.html`

**Know Your Customers. Engage with Purpose. Retain for Life.**

To help maximise the full scope of their customer relationships, sales lead through to customer service, CMS Customer Relationship module (CRM) provides dealerships with an end-to-end technology solution that helps drive your customer satisfaction index, in one place.

**Key capabilities**

- Turn customer data into meaningful engagement — and measurable results
- Let CMS CRM show you how to turn engagement into growth

**Features**

- **360° Customer View** — Access a complete profile for each customer, including communication history, purchases, service records, follow-ups, CSI results, and marketing engagement — all in one place.
- **Automated Communications** — Stay connected without the manual effort. Send personalised WhatsApp messages, SMS, or emails for birthdays, licence renewals, service reminders, welcome letters, and more — all fully configurable and POPIA-compliant.
- **Whatsapp Bot CSI Follow-Up** — Automatically trigger post-sale or post-service CSI surveys via WhatsApp. Capture real-time customer feedback and flag concerns for quick resolution.
- **Reminders & Retention Triggers** — Set up key date reminders like driver’s licence renewals, finance expiries, and service intervals. Keep your dealership top of mind at exactly the right moments.
- **Marketing Campaign Manager** — Design and send SMS, WhatsApp, or email campaigns directly from the system. Filter your customer base by interest, service status, or vehicle ownership for highly targeted messaging — with live dashboards to track responses.
- **Concern & Case Logging (Crp)** — Log and manage customer complaints or concerns centrally. Assign cases to relevant departments, track resolution progress, and close the loop with the customer — all fully auditable.
- **Customer Lifecycle Tracking** — From the first lead to repeat purchases and beyond, CMS CRM connects every step in the customer journey. Improve handovers between sales and service teams and create a seamless customer experience.

**Why choose CMS Relationship Management?**

- One central platform for all customer data and engagement
- Improve customer satisfaction, loyalty, and repeat business
- Automate communications and retention activities
- Track CSI, concerns, and marketing performance
- POPIA-compliant and fully integrated with CMS Sales Cloud, LMS, and Service Centre

### 4.6 Reporting

*Page:* `/Reporting.html`

**Make Data-Driven Decisions. Track What Matters. Improve What Counts.**

CMS Systems offers a powerful suite of reporting and analytics tools that give dealership leaders complete visibility across every department — from lead management and sales activity to service performance, marketing results, and OEM compliance. With real-time dashboards and configurable reports, you can move from guessing to knowing, from reacting to leading.

**Key capabilities**

- Reporting on activities on all CMS Platforms
- Detailed Activity and Progress on Prospects
- Desk logging Management
- Comprehensive ROI Breakdown
- Contact CMS Systems for a live demo of our Reporting & Insights Suite

**Features**

- **1. Report Management** — Make Data-Driven Decisions. Track What Matters. Improve What Counts.
- **Real-Time Dashboards** — Monitor live performance across departments with visual dashboards that highlight sales pipeline activity, lead conversion, stock availability, technician performance, CSI scores, and more — all updated in real time.
- **Sales Performance Reports** — Track individual and team sales activity, appointments, test drives, lost sales, quotes issued, and deals delivered. Use data to coach your team, identify gaps, and drive results.
- **Lead Source & Marketing ROI Reporting** — Understand where your leads are coming from and how they’re performing. Track cost-per-lead, response times, and conversions by channel — including websites, portals, social media, and campaigns.
- **Service & Workshop Reports** — View workshop loading, job card flow, carry-over jobs, technician efficiency, and service turnaround times. Use insights to optimise scheduling and aftersales operations.
- **Stock & Inventory Reports** — Run real-time stock reports by make, model, location, or status. Identify unsold units, demo usage, vehicle movements, and audit history with full traceability.
- **CRM Engagement & Communication Logs** — Report on customer contact history, campaign effectiveness, birthday and reminder responses, CSI outcomes, and concern resolution metrics.

**Why choose CMS Reporting?**

- Real-time visibility across all dealership operations
- Fully customisable reports with user-defined filters and export options
- Improve accountability, performance, and compliance
- Designed for Dealer Principals, Sales Managers, OEMs, and Support Teams
- Seamlessly integrated with all CMS modules — LMS, Sales Cloud, CRM, DDF, and Service Centre

### 4.7 Fleet Management

*Page:* `/FleetManagement.html`

**Streamlined Fleet Sales. Smarter Planning. OEM-Grade Visibility.**

Fleet management is the process of organising, tracking and optimising a fleet operation within your dealership. Using CMS Fleet Management software, fleet managers gain real-time visibility into their entire fleet. This enables them to make informed decisions that enhance customer and driver satisfaction while also reducing overall operational costs.

**Key capabilities**

- Purpose-built tools for OEMs, RSMs, Fleet Managers, and Dealer Groups
- Let CMS Systems help you manage, monitor, and grow your fleet operations

**Features**

- **OEM Forecasting & Dealer Scorecards** — Track and report on fleet sales performance against monthly or quarterly targets. Use CMS dashboards to provide OEMs and Regional Sales Managers with real-time visibility into dealer activity, pipeline health, and conversion rates.
- **Centralised Fleet Pipeline Tracking** — From enquiry to order to delivery, manage every stage of the fleet sales process across dealerships and sales teams. Get full visibility into deal status, client requirements, and progress updates — all tied to user accountability.
- **Bulk Quoting & Fleet Deal Structuring** — Generate quotes for multiple vehicles with tiered pricing, incentives, and trade-in valuations — all from a centralised platform. Structure deals aligned to fleet client needs and OEM program guidelines.
- **Fleet Call Card Management** — Track scheduled dealer check-ins and call activities with a mobile-enabled call card solution. Review progress, note discussions, and log actions on the spot — ensuring consistent engagement and follow-through with key clients.
- **Dealer Network Reporting for OEMs** — View consolidated reports by dealer, region, or brand. Monitor lead volumes, stock availability, sales velocity, and customer engagement across the fleet channel — all updated in real time.
- **Audit Trail & Compliance Tracking** — Maintain a full audit trail of communications, offers, documentation, and approvals — essential for regulatory reporting and internal governance.
- **Integration with Cms Sales Cloud & CRM** — Fleet processes integrate seamlessly with the broader CMS ecosystem, ensuring no duplication, data loss, or siloed activity. From fleet lead generation to CRM records and deal finalisation — it’s all connected.

**Why choose CMS Fleet Management?**

- Simplify and scale your fleet operations
- Gain full visibility into dealer and OEM performance
- Reduce admin and improve forecasting accuracy
- Support dealer groups, RSMs, and OEMs from one platform
- Fully integrated with CMS CRM, LMS, and DMS partners

### 4.8 Valuation Management

*Page:* `/ValuationManagement.html`

**Smarter Valuations. Faster Decisions. More Confident Deals.**

The CMS Trade-In Valuation Management Solution streamlines the appraisal process, ensuring accuracy, transparency, and speed — from initial estimate to final offer. Designed specifically for the dealership environment, this solution enables sales teams to evaluate trade-ins confidently, with integrated tools that support better deal-making and customer trust.

**Key capabilities**

- Streamline the valuation process with built-in digital tools
- Ensure accurate, market-aligned trade-in offers
- Reduce negotiation delays and improve customer experience
- Maintain full transparency with logged history and approvals
- Seamlessly connect trade-ins to quotes, stock, and DMS integrations

**Features**

- **In-App Trade-In Valuations (Cms Tiv)** — Generate on-the-spot valuations directly within the CMS Sales Cloud. Sales Executives can input key vehicle details, condition, mileage, and notes — all saved to the prospect’s profile.
- **Integrated Market Data (Transunion & More)** — Access accurate, up-to-date vehicle value ranges through integration with third-party data providers like TransUnion. Get quick insights into market pricing, model trends, and depreciation.
- **Mobile Trade-In Capture** — Evaluate vehicles from anywhere using a mobile device. Capture images, scan license discs, input details, and submit valuations for management approval — all synced to the customer record.
- **Manager Approval Workflow** — Route valuations through your dealership’s internal approval chain with optional value editing, comments, and deal structuring suggestions. Improve decision-making while maintaining accountability.
- **Multi-Vehicle Valuation & Comparison** — Quote multiple trade-in vehicles per customer and present combined valuations alongside multi-vehicle purchase options — all neatly packaged in one CMS-generated sales quote.
- **Digital Recordkeeping & Audit Trail** — Every valuation, edit, comment, and approval is logged for future reference and compliance. Maintain full transparency and historical data for trade-in performance reviews.
- **Seamless Integration with Deal File & Stock** — Once accepted, trade-in vehicles can be pushed directly into CMS Stock Management, complete with condition notes, photos, and valuation history. No duplication, no missed steps.

### 4.9 OEM Analytics & Targets

*Page:* `/OEMAnalyticsTargets.html`

**Measure Performance. Manage Compliance. Maximise Dealer Network Results.**

CMS OEM Analytics & Targets Solutions provide manufacturers, regional sales managers (RSMs), and dealer groups with complete visibility across their network — enabling real-time performance tracking, accurate forecasting, and consistent target management across all dealerships.

**Key capabilities**

- Real-time visibility into dealer and group performance
- Forecast volume, monitor delivery, and manage targets effectively
- Track sales, CRM activity, and lead pipeline health
- Empower regional teams with mobile tools and structured insights
- Standardised reporting across all brands and dealer tiers

**Features**

- **Dealer Scorecards & Target Management** — Set monthly or quarterly dealer targets across sales, stock, lead conversion, or service performance. Monitor live progress against each KPI, with visual scorecards and automated performance alerts.
- **OEM Forecasting Dashboards** — Track pipeline activity, deal progress, and expected deliveries across the dealer network. Forecast volume and unit delivery with real-time accuracy — critical for production planning and sales reporting.
- **Lead & Sales Funnel Analytics** — Monitor lead quality, responsiveness, and follow-up effectiveness at both dealer and RSM levels. View conversion rates from source to sale and compare performance across groups or regions.
- **Group-Wide Oversight** — Access consolidated dashboards by brand, region, or dealer group. Review high-level trends and deep-dive into dealer-specific results to identify support or intervention needs.
- **Call Card & Field Activity Reporting** — Track RSM dealer visits with mobile-enabled call card logging. Record meeting insights, dealer feedback, and next steps — all linked to network activity and performance context.
- **OEM Campaign Tracking & Reporting** — Measure how OEM-led marketing and incentive campaigns are performing across the network. Monitor campaign reach, lead response, and dealer execution with built-in reporting tools.
- **Popia-Compliant Data & Audit Trails** — Ensure full compliance with local data privacy regulations. All dealer data, user actions, and reporting access are tracked with a secure, auditable trail.

## 5. Integrations and partners

CMS Sales Solutions integrate with the dealership management tools used in the automotive industry — DMS, inventory and financial-service platforms. Named integrations found in the product copy: **Keyloop, Auto IT, Evolve**, plus **Logimeter CallConnect** for voice, and stock publishing to **Carfind, AutoTrader and Cars.co.za**.

The site also displays 15 partner logos and 42 client/OEM brand logos (Volkswagen, Ford, Hyundai, Nissan, Suzuki, Renault, Mercedes-Benz, Kia and others).

## 6. Brand / corporate identity

From the CMS Systems Visual Guide (dated 2023/02/27):

| Role | Colour |
| --- | --- |
| Primary / headings / structure | Blue `#31459C` |
| Secondary accent / links | Turquoise `#00AEED` |
| Sparing accent only | Red `#FD4545` |
| Body text ("brand black") | `#2E2E2E` — never pure black |
| Secondary text | Grey `#585858` |
| Borders / dividers | Cool grey `#B2B2B2`, light `#D8D8D8` |
| Dominant background | White `#FFFFFF` |

- **Typeface:** Roboto (Regular / Medium / Bold / Italic). For editable Office files the guide specifies Arial Nova → Microsoft Sans Serif → Open Sans instead.
- **Build from white.** White is the most prominent brand colour; colour punctuates and never floods the page.
- **Logo:** only approved artwork may be placed — never redrawn, retyped, recoloured, stretched or given effects. Preferred position top left, with clear space around it roughly the height of the round emblem. The current master is the "CMS eco" lock-up.
- **Known asset gap:** the one-tone white/black/reverse logo files still show the older "CMS" wordmark, not the current "CMS eco" lock-up.

## 7. Current site: technical state

Measured on the live site:

- Static HTML, no CMS or framework. Hosted on **Microsoft IIS 10.0 / ASP.NET**.
- **jQuery 3.5.1**, plus 17 JavaScript files and 14 stylesheets.
- Loads **two separate Bootstrap bundles**, **two carousel libraries** (Owl Carousel and Swiper) and **two animation libraries** (AOS and animate.css).
- Other libraries: icofont, boxicons, FontAwesome, Venobox, Waypoints, CounterUp, Isotope, Choices.js, jQuery Easing, jQuery Sticky.
- **109 images** on the homepage.
- Fonts are loaded from **Google Fonts** (`Roboto:300,400,700`) — an external dependency.
- Viewport meta is present, so it is nominally responsive.
- Character encoding is inconsistent: pages declare UTF-8 but contain cp1252 bytes, so apostrophes and dashes render as `�` in some tools.

### Image assets on the server

| Folder | Count | Contents |
| --- | --- | --- |
| `/assets/img/clients/` | 42 | Client and OEM brand logos |
| `/assets/img/partners/` | 15 | Integration partner logos |
| `/assets/img/products/` | 11 | Product screenshots |
| `/assets/img/productHeaders/` | 9 | Product page header images |
| `/assets/img/slide/` | 4 | Homepage carousel slides |
| `/assets/img/counters/` | 2 | Counter icons |
| `/assets/img/` | 5 | Logo, favicon, about, world map |

One broken asset: `/assets/img/products/CustomerRelationshipManagement.png` returns a 1.2 KB placeholder, not an image.

## 8. Legal Notice / Privacy / POPIA

Full text as published at `/legal.html`.

### Legal Notice

#### 1. Introduction

Customer Management Solutions (Pty) Ltd ("CMS", "we", "us", or "our") respects the privacy rights of individuals and is committed to protecting personal information in accordance with the Protection of Personal Information Act, 4 of 2013 ("POPIA"), the Promotion of Access to Information Act, 2 of 2000 ("PAIA"), and other applicable laws of the Republic of South Africa.

This Privacy Notice explains how CMS collects, uses, processes, stores, shares and protects personal information when individuals interact with:

- the CMS website
- CMS products and services
- CMS communication channels
- CMS client platforms
- CMS business operations

This notice applies to all data subjects whose personal information is processed by CMS.

This Privacy Notice should be read together with the CMS PAIA Manual available on the CMS website.

#### 2. Responsible Party

The responsible party for the processing of personal information is:

Customer Management Solutions (Pty) Ltd Registration Number: 2013/088068/07 Physical Address: Unit 4, Cambridge Office Park 5 Bauhinia Street Highveld Techno Park Centurion 0159 South Africa Telephone: 0861 999 609 Website: www.cmssystems.co.za

#### 3. Information Officer

In accordance with POPIA and PAIA, CMS has appointed an Information Officer responsible for overseeing compliance with applicable data protection legislation.

Information Officer Leon Kemp Email: leon@cmssystems.co.za

Deputy Information Officer Francois Kemp Email: francois@cmssystems.co.za

Data subjects may contact the Information Officer regarding any privacy-related queries, requests, or concerns.

#### 4. Personal Information We Process

CMS may process personal information depending on the nature of the relationship with the data subject.

This may include:

Identification Information Name and surname Identity or passport number

Contact Information Email address Telephone number Physical or postal address

Business and Client Information Company contact details Client communications Service requests

Employment Information Employee records Payroll information Benefits administration Training and performance records

Financial Information Billing information Bank details Transaction records

Technical Information IP address Browser type Device information System activity logs

Website Interaction Information Website enquiries Contact form submissions Marketing consent records

#### 5. Information Processed on Behalf of Clients

CMS provides technology platforms used by clients such as dealerships and service providers.

In these circumstances CMS may act as an Operator as defined in POPIA and process personal information strictly on the documented instructions of its clients.

Such information may include:

- Customer contact details
- Lead information
- Customer relationship management data
- Sales and service records
- Analytics and reporting data

CMS does not determine the purpose of such processing and processes the information solely in accordance with contractual instructions.

#### 6. Purposes of Processing

CMS processes personal information for purposes including but not limited to:

- Providing and maintaining CMS systems and services
- Managing client relationships
- Responding to enquiries and support requests
- Performing contractual obligations
- Managing employment relationships
- Complying with legal and regulatory requirements
- Maintaining internal administrative records
- Monitoring system performance and security
- Improving services and technology platforms
- Conducting business development and marketing activities where permitted by law

CMS processes only personal information that is reasonably necessary for the purposes described in this Privacy Notice.

#### 7. Lawful Basis for Processing

CMS processes personal information in accordance with POPIA on the following lawful bases:

- Performance of a contract with the data subject
- Compliance with legal or regulatory obligations
- Legitimate business interests pursued by CMS
- Consent obtained from the data subject where required
- Protection of legitimate interests of the data subject or another person

#### 8. Disclosure of Personal Information

CMS may disclose personal information to:

- Authorised employees of CMS
- Service providers performing services on behalf of CMS
- IT infrastructure and hosting providers
- Professional advisors including auditors and attorneys
- Financial institutions
- Regulators and statutory authorities
- Business partners involved in service delivery
- Clients where CMS acts as an operator

All third parties are required to maintain appropriate confidentiality and security safeguards.

#### 9. International Transfers

CMS may transfer personal information outside the Republic of South Africa where systems or service providers are located in other jurisdictions.

Where such transfers occur, CMS ensures that one or more of the following safeguards are implemented:

- The recipient is subject to data protection laws providing an adequate level of protection
- Contractual safeguards are implemented
- The transfer is necessary for the performance of a contract
- The data subject has consented to the transfer where required

#### 10. Information Security

CMS implements appropriate technical and organisational measures designed to protect personal information against unauthorised access, loss, misuse or disclosure.

These measures include:

- Access control mechanisms
- Authentication controls
- Network security safeguards
- Encryption where appropriate
- Employee confidentiality obligations
- Security monitoring and auditing
- Incident detection and response procedures

CMS maintains incident response procedures designed to identify, investigate and respond to security compromises involving personal information.

If CMS becomes aware of any unauthorised access to, or compromise of, personal information under its control, CMS will take appropriate steps to investigate the incident and mitigate any potential harm. Where required in terms of Section 22 of POPIA, CMS will notify the Information Regulator and affected data subjects as soon as reasonably possible.

#### 11. Data Retention

CMS retains personal information only for as long as necessary to fulfil the purposes for which it was collected or to comply with legal and regulatory obligations.

Retention periods are determined based on:

- Statutory requirements
- Contractual obligations
- Operational needs
- Legitimate business purposes

Personal information that is no longer required is securely destroyed or de-identified.

#### 12. Data Subject Rights

In accordance with POPIA, data subjects have the right to:

- Request access to personal information held about them
- Request correction or deletion of inaccurate information
- Object to processing in certain circumstances
- Withdraw consent where processing is based on consent
- Lodge a complaint with the Information Regulator

Requests may be submitted to the Information Officer.

#### 13. Complaints

If a data subject believes that CMS has processed personal information unlawfully, a complaint may be lodged with:

The Information Regulator (South Africa) Website: https://www.inforegulator.org.za Email: complaints.IR@inforegulator.org.za

#### 14. Third-Party Websites

The CMS website may contain links to external websites.

CMS is not responsible for the privacy practices of such third-party websites and encourages users to review their privacy policies.

#### 15. Changes to This Privacy Notice

CMS may update this Privacy Notice from time to time to reflect changes in:

- Regulatory requirements
- Business practices
- Technological developments

#### WEBSITE COOKIE POLICY

Customer Management Solutions (Pty) Ltd Registration Number: 2013/088068/07 Last Updated: 11 March 2026

#### 1. Introduction

This Cookie Policy explains how Customer Management Solutions (Pty) Ltd ("CMS") uses cookies and similar technologies when individuals visit the CMS website.

Cookies help improve website functionality, performance and user experience.

#### 2. What Are Cookies

Cookies are small text files stored on a user's device when visiting a website.

They enable websites to:

- Recognise returning users
- Remember preferences
- Analyse website performance
- Improve functionality

#### 3. Types of Cookies Used

CMS may use the following categories of cookies:

#### 3.1 Essential Cookies

These cookies are necessary for the operation of the website.

They enable functions such as:

- Page navigation
- Secure login
- System administration
- Session management

Without these cookies the website cannot function properly.

#### 3.2 Analytics Cookies

CMS may use analytics tools such as Google Analytics to understand how visitors interact with the website.

Information collected may include:

- Pages visited
- Time spent on pages
- Device type
- Browser type
- General geographic location

This information is aggregated and used to improve website performance.

#### 3.3 Functional Cookies

These cookies allow the website to remember user preferences, such as:

- Language selection
- Interface preferences
- Previous interactions

#### 3.4 Marketing Cookies

Where applicable, marketing cookies may be used to measure marketing campaign effectiveness and analyse visitor engagement.

CMS does not sell personal information collected through cookies.

#### 4. Personal Information and Cookies

Certain cookies may collect information that constitutes personal information under POPIA, including:

- IP address
- Device identifiers
- Browsing behaviour

Where such information constitutes personal information as defined in the Protection of Personal Information Act, 4 of 2013 (POPIA), it will be processed in accordance with the CMS Privacy Notice available on the CMS website.

#### 5. Third-Party Cookies

CMS may permit third-party service providers to place cookies on the website, including:

- Analytics providers
- Hosting providers
- Marketing technology providers

CMS does not control the processing activities of such third-party providers and encourages users to review the privacy policies of those providers.

#### 6. Managing Cookies

Users can manage or disable cookies through their browser settings.

Most browsers allow users to:

- Block cookies
- Delete cookies
- Receive alerts before cookies are stored

Disabling cookies may affect website functionality.

#### 7. Cookie Consent

By continuing to use the CMS website, users acknowledge the use of cookies as described in this Cookie Policy.

The CMS website may display a cookie consent banner allowing users to accept or manage the use of cookies. By continuing to use the website after being notified of cookies, users consent to the use of cookies in accordance with this Cookie Policy.

#### 8. Changes to This Cookie Policy

CMS may update this Cookie Policy from time to time.

Any updates will be published on the CMS website.

#### PROTECTION OF PERSONAL INFORMATION ACT (POPIA)

With the application of the POPI Act to protect an individual’s right to privacy by offering protection against the unlawful collection, retention, dissemination and use of personal information, coming into effect from 1st July 2021, CMS Software Solutions has developed and implemented useful POPIA tools in the service flow, that provide easy management and compliance for CMS Software Solution customers. CMS PAIA MANUAL DOWNLOAD

#### CONTACT US

If you have any questions about this Privacy Policy, You can contact us: • By email: support@cmssystems.co.za • By phone number: 0861 999 609
