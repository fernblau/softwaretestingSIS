# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04-compare.spec.ts >> Compare two products and assert their data
- Location: tests/04-compare.spec.ts:3:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('[data-test="add-to-compare"]')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - text: View the
    - link "Documentation" [ref=e4] [cursor=pointer]:
      - /url: https://testsmith-io.github.io/practice-software-testing/#/
    - text: for this application.
  - generic [ref=e5]:
    - generic [ref=e7]:
      - generic [ref=e8]: Practice Black Box Testing & Bug Hunting
      - button "Testing Guide" [ref=e9] [cursor=pointer]
      - button "🐛 Bug Hunting" [ref=e10] [cursor=pointer]
    - navigation [ref=e11]:
      - generic [ref=e12]:
        - link "Practice Software Testing - Toolshop" [ref=e13] [cursor=pointer]:
          - /url: /
        - generic [ref=e32]:
          - menubar "Main menu" [ref=e33]:
            - menuitem [ref=e34]:
              - link "Home" [ref=e35] [cursor=pointer]:
                - /url: /
            - menuitem [ref=e36]:
              - button "Categories" [ref=e37] [cursor=pointer]
            - menuitem [ref=e38]:
              - link "Contact" [ref=e39] [cursor=pointer]:
                - /url: /contact
            - menuitem [ref=e40]:
              - link "Sign in" [ref=e41] [cursor=pointer]:
                - /url: /auth/login
          - button "Select language" [ref=e43] [cursor=pointer]: EN
  - generic [ref=e48]:
    - generic [ref=e49]:
      - heading "Practice Software Testing - Toolshop" [level=1] [ref=e50]
      - paragraph [ref=e51]:
        - img "Banner" [ref=e52]
      - separator [ref=e53]
      - generic [ref=e54]:
        - text: Enjoyed testing this app? Level up with hands-on software testing courses.
        - link "Explore courses" [ref=e57] [cursor=pointer]:
          - /url: https://onlinecourses.testsmith.io/?utm_source=pst&utm_medium=homepage&utm_campaign=app_promo
    - generic [ref=e58]:
      - generic [ref=e59]:
        - heading "Sort" [level=4] [ref=e60]
        - separator [ref=e64]
        - combobox "sort" [ref=e67]:
          - option [selected]
          - option "Name (A - Z)"
          - option "Name (Z - A)"
          - option "Price (High - Low)"
          - option "Price (Low - High)"
          - option "CO₂ Rating (A - E)"
          - option "CO₂ Rating (E - A)"
        - heading "Price Range" [level=4] [ref=e68]
        - separator [ref=e72]
        - generic "ngx-slider" [ref=e74]:
          - slider "ngx-slider" [ref=e79] [cursor=pointer]
          - slider "ngx-slider-max" [ref=e80] [cursor=pointer]
          - generic [ref=e81]: "0"
          - generic [ref=e82]: "200"
          - generic [ref=e83]: "1"
          - generic [ref=e84]: "100"
        - heading "Search" [level=4] [ref=e86]
        - separator [ref=e90]
        - generic [ref=e92]:
          - generic [ref=e93]: Search
          - textbox "Search" [ref=e94]
          - button "X" [ref=e95] [cursor=pointer]
          - button "Search" [ref=e96] [cursor=pointer]
        - heading "Filters" [level=4] [ref=e97]
        - separator [ref=e101]
        - heading "By category:" [level=4] [ref=e102]
        - group "Categories" [ref=e103]:
          - generic [ref=e105]:
            - generic [ref=e106]:
              - checkbox "Hand Tools" [ref=e107]
              - text: Hand Tools
            - list [ref=e108]:
              - group "Categories" [ref=e109]:
                - generic [ref=e112]:
                  - checkbox "Hammer" [ref=e113]
                  - text: Hammer
                - generic [ref=e115]:
                  - checkbox "Hand Saw" [ref=e116]
                  - text: Hand Saw
                - generic [ref=e118]:
                  - checkbox "Wrench" [ref=e119]
                  - text: Wrench
                - generic [ref=e121]:
                  - checkbox "Screwdriver" [ref=e122]
                  - text: Screwdriver
                - generic [ref=e124]:
                  - checkbox "Pliers" [ref=e125]
                  - text: Pliers
                - generic [ref=e127]:
                  - checkbox "Chisels" [ref=e128]
                  - text: Chisels
                - generic [ref=e130]:
                  - checkbox "Measures" [ref=e131]
                  - text: Measures
          - generic [ref=e132]:
            - generic [ref=e133]:
              - checkbox "Power Tools" [ref=e134]
              - text: Power Tools
            - list [ref=e135]:
              - group "Categories" [ref=e136]:
                - generic [ref=e139]:
                  - checkbox "Grinder" [ref=e140]
                  - text: Grinder
                - generic [ref=e142]:
                  - checkbox "Sander" [ref=e143]
                  - text: Sander
                - generic [ref=e145]:
                  - checkbox "Saw" [ref=e146]
                  - text: Saw
                - generic [ref=e148]:
                  - checkbox "Drill" [ref=e149]
                  - text: Drill
          - generic [ref=e150]:
            - generic [ref=e151]:
              - checkbox "Other" [ref=e152]
              - text: Other
            - list [ref=e153]:
              - group "Categories" [ref=e154]:
                - generic [ref=e157]:
                  - checkbox "Tool Belts" [ref=e158]
                  - text: Tool Belts
                - generic [ref=e160]:
                  - checkbox "Storage Solutions" [ref=e161]
                  - text: Storage Solutions
                - generic [ref=e163]:
                  - checkbox "Workbench" [ref=e164]
                  - text: Workbench
                - generic [ref=e166]:
                  - checkbox "Safety Gear" [ref=e167]
                  - text: Safety Gear
                - generic [ref=e169]:
                  - checkbox "Fasteners" [ref=e170]
                  - text: Fasteners
        - heading "By brand:" [level=4] [ref=e172]
        - group "Brands" [ref=e173]:
          - generic [ref=e176]:
            - checkbox "ForgeFlex Tools" [ref=e177]
            - text: ForgeFlex Tools
          - generic [ref=e179]:
            - checkbox "MightyCraft Hardware" [ref=e180]
            - text: MightyCraft Hardware
        - heading "Sustainability:" [level=4] [ref=e182]
        - group "Eco-Friendly Products" [ref=e183]:
          - generic [ref=e186]:
            - checkbox "Show only eco-friendly products" [ref=e187]
            - text: Show only eco-friendly products
      - generic [ref=e188]:
        - generic [ref=e189]:
          - 'link "Combination Pliers Compare Combination Pliers CO₂: A B C D E $14.15" [ref=e190] [cursor=pointer]':
            - /url: /product/01M702WMP820827SJYQM041315
            - generic [ref=e191]:
              - img "Combination Pliers" [ref=e192]
              - button "Compare" [ref=e193]
            - generic [ref=e197]:
              - heading "Combination Pliers" [level=5] [ref=e198]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e199]:
                - text: "CO₂:"
                - generic [ref=e200]: A
                - generic [ref=e201]: B
                - generic [ref=e202]: C
                - generic [ref=e203]: D
                - generic [ref=e204]: E
            - generic [ref=e205]: $14.15
          - 'link "Pliers Compare Pliers CO₂: A B C D E $12.01" [ref=e207] [cursor=pointer]':
            - /url: /product/01M702WMPR68T56S3G8DZZ822B
            - generic [ref=e208]:
              - img "Pliers" [ref=e209]
              - button "Compare" [ref=e210]
            - generic [ref=e214]:
              - heading "Pliers" [level=5] [ref=e215]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e216]:
                - text: "CO₂:"
                - generic [ref=e217]: A
                - generic [ref=e218]: B
                - generic [ref=e219]: C
                - generic [ref=e220]: D
                - generic [ref=e221]: E
            - generic [ref=e222]: $12.01
          - 'link "Bolt Cutters Compare Bolt Cutters CO₂: A B C D E $48.41" [ref=e224] [cursor=pointer]':
            - /url: /product/01M702WMPWJY4957T7XS1QAN6C
            - generic [ref=e225]:
              - img "Bolt Cutters" [ref=e226]
              - button "Compare" [ref=e227]
            - generic [ref=e231]:
              - heading "Bolt Cutters" [level=5] [ref=e232]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e233]:
                - text: "CO₂:"
                - generic [ref=e234]: A
                - generic [ref=e235]: B
                - generic [ref=e236]: C
                - generic [ref=e237]: D
                - generic [ref=e238]: E
            - generic [ref=e239]: $48.41
          - 'link "Long Nose Pliers Compare Long Nose Pliers CO₂: A B C D E Out of stock $14.24" [ref=e241] [cursor=pointer]':
            - /url: /product/01M702WMQA93DW26SH2340RBDR
            - generic [ref=e242]:
              - img "Long Nose Pliers" [ref=e243]
              - button "Compare" [ref=e244]
            - generic [ref=e248]:
              - heading "Long Nose Pliers" [level=5] [ref=e249]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e250]:
                - text: "CO₂:"
                - generic [ref=e251]: A
                - generic [ref=e252]: B
                - generic [ref=e253]: C
                - generic [ref=e254]: D
                - generic [ref=e255]: E
            - generic [ref=e256]:
              - generic [ref=e257]: Out of stock
              - generic [ref=e258]: $14.24
          - 'link "Slip Joint Pliers Compare Slip Joint Pliers CO₂: A B C D E $9.17" [ref=e259] [cursor=pointer]':
            - /url: /product/01M702WMQMEZ667NS6G3VY64F3
            - generic [ref=e260]:
              - img "Slip Joint Pliers" [ref=e261]
              - button "Compare" [ref=e262]
            - generic [ref=e266]:
              - heading "Slip Joint Pliers" [level=5] [ref=e267]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e268]:
                - text: "CO₂:"
                - generic [ref=e269]: A
                - generic [ref=e270]: B
                - generic [ref=e271]: C
                - generic [ref=e272]: D
                - generic [ref=e273]: E
            - generic [ref=e274]: $9.17
          - 'link "Claw Hammer with Shock Reduction Grip Compare Claw Hammer with Shock Reduction Grip CO₂: A B C D E $13.41" [ref=e276] [cursor=pointer]':
            - /url: /product/01M702WMQP0YDT71MM8VTKVC3G
            - generic [ref=e277]:
              - img "Claw Hammer with Shock Reduction Grip" [ref=e278]
              - button "Compare" [ref=e279]
            - generic [ref=e283]:
              - heading "Claw Hammer with Shock Reduction Grip" [level=5] [ref=e284]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e285]:
                - text: "CO₂:"
                - generic [ref=e286]: A
                - generic [ref=e287]: B
                - generic [ref=e288]: C
                - generic [ref=e289]: D
                - generic [ref=e290]: E
            - generic [ref=e291]: $13.41
          - 'link "Hammer Compare Hammer CO₂: A B C D E $12.58" [ref=e293] [cursor=pointer]':
            - /url: /product/01M702WMQS3H6T9JPV25D4ND5A
            - generic [ref=e294]:
              - img "Hammer" [ref=e295]
              - button "Compare" [ref=e296]
            - generic [ref=e300]:
              - heading "Hammer" [level=5] [ref=e301]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e302]:
                - text: "CO₂:"
                - generic [ref=e303]: A
                - generic [ref=e304]: B
                - generic [ref=e305]: C
                - generic [ref=e306]: D
                - generic [ref=e307]: E
            - generic [ref=e308]: $12.58
          - 'link "Claw Hammer Compare Claw Hammer CO₂: A B C D E $11.48" [ref=e310] [cursor=pointer]':
            - /url: /product/01M702WMQXYGPBJZ6NG5S10J6A
            - generic [ref=e311]:
              - img "Claw Hammer" [ref=e312]
              - button "Compare" [ref=e313]
            - generic [ref=e317]:
              - heading "Claw Hammer" [level=5] [ref=e318]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e319]:
                - text: "CO₂:"
                - generic [ref=e320]: A
                - generic [ref=e321]: B
                - generic [ref=e322]: C
                - generic [ref=e323]: D
                - generic [ref=e324]: E
            - generic [ref=e325]: $11.48
          - 'link "Thor Hammer Compare Thor Hammer CO₂: A B C D E $11.14" [ref=e327] [cursor=pointer]':
            - /url: /product/01M702WMR07Y08EC9QQP5AJRHR
            - generic [ref=e328]:
              - img "Thor Hammer" [ref=e329]
              - button "Compare" [ref=e330]
            - generic [ref=e334]:
              - heading "Thor Hammer" [level=5] [ref=e335]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e336]:
                - text: "CO₂:"
                - generic [ref=e337]: A
                - generic [ref=e338]: B
                - generic [ref=e339]: C
                - generic [ref=e340]: D
                - generic [ref=e341]: E
            - generic [ref=e342]: $11.14
        - navigation [ref=e346]:
          - list [ref=e347]:
            - listitem [ref=e348]:
              - button "Previous": «
            - listitem [ref=e349]:
              - button "Page-1" [ref=e350] [cursor=pointer]: "1"
            - listitem [ref=e351]:
              - button "Page-2" [ref=e352] [cursor=pointer]: "2"
            - listitem [ref=e353]:
              - button "Page-3" [ref=e354] [cursor=pointer]: "3"
            - listitem [ref=e355]:
              - button "Page-4" [ref=e356] [cursor=pointer]: "4"
            - listitem [ref=e357]:
              - button "Page-5" [ref=e358] [cursor=pointer]: "5"
            - listitem [ref=e359]:
              - button "Next" [ref=e360] [cursor=pointer]: »
  - contentinfo [ref=e362]:
    - generic [ref=e364]:
      - generic [ref=e365]: Learn & Explore
      - generic [ref=e366]:
        - link "Learn Test Automation Hands-on courses for Playwright, Robot Framework, APIs and more" [ref=e368] [cursor=pointer]:
          - /url: https://onlinecourses.testsmith.io
          - generic [ref=e371]:
            - generic [ref=e372]: Learn Test Automation
            - text: Hands-on courses for Playwright, Robot Framework, APIs and more
        - link "API Spector Open-source API testing, mocking and contract testing" [ref=e374] [cursor=pointer]:
          - /url: https://api-spector.dev
          - generic [ref=e377]:
            - generic [ref=e378]: API Spector
            - text: Open-source API testing, mocking and contract testing
        - link "GitHub Source code, issues and contributions" [ref=e380] [cursor=pointer]:
          - /url: https://github.com/testsmith-io/practice-software-testing
          - generic [ref=e383]:
            - generic [ref=e384]: GitHub
            - text: Source code, issues and contributions
    - generic [ref=e385]:
      - generic [ref=e386]:
        - text: This is a DEMO application, used for software testing training purpose. |
        - link "Privacy Policy" [ref=e387] [cursor=pointer]:
          - /url: /privacy
        - text: "| Banner photo by"
        - link "Barn Images" [ref=e388] [cursor=pointer]:
          - /url: https://unsplash.com/@barnimages
        - text: "on"
        - link "Unsplash" [ref=e389] [cursor=pointer]:
          - /url: https://unsplash.com/photos/t5YUoHW6zRo
        - text: .
      - generic [ref=e390]: v2.5 | Built 2026-10-11 | Angular 20.0.5
  - button "Open chat" [ref=e392] [cursor=pointer]
  - button "Show live shop activity" [ref=e396] [cursor=pointer]
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | import { BasePage } from './BasePage';
  3  | 
  4  | export class ComparePages extends BasePage {
  5  |   async openCatalog() { 
  6  |     await this.page.goto('/'); 
  7  |   }
  8  |   async addFirstTwoProductsToCompare() {
  9  |     await this.page.locator('.card').nth(0).click();
> 10 |     await this.page.locator('[data-test="add-to-compare"]').click();
     |                                                             ^ Error: locator.click: Test timeout of 60000ms exceeded.
  11 |     await this.page.goto('/');
  12 |     await this.page.locator('.card').nth(1).click();
  13 |     await this.page.locator('[data-test="add-to-compare"]').click();
  14 |   }
  15 |   async goToComparePage() { 
  16 |     await this.page.goto('/compare'); 
  17 |   }
  18 |   async getProductTitle(): Promise<Locator> { 
  19 |     return this.page.locator('h1, h2, .card-title'); 
  20 |   }
  21 |   async getProductPrice(): Promise<Locator> { 
  22 |     return this.page.locator('.text-muted'); 
  23 |   }
  24 | }
  25 | 
```