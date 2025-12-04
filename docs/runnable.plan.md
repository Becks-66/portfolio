# Plan: Create Runnable Case Study Page (Desktop View)

Create `runnable.html` matching the Figma desktop design exactly. White background, 80px horizontal padding, 80px vertical section gaps, 640px content width. Uses static images with fixed widths and auto height, horizontal scroll for wide tables, `<strong>` for emphasis, and placeholder for Sitemaps section.

## Steps

### 1. Create `runnable.html`

Create the HTML file with structure matching `projects.html`:
- Header with "My projects" nav button active
- Hero card: horizontal flex layout
  - Image left: 366×273px, 16px radius
  - Info right: title "Runnable", subtitle "Building a running app for safer outdoor workouts.", Type/Process/Client rows (Client row includes tag), reading time at bottom
- Back arrow (28px SVG icon) below hero
- 640px content container with all sections (see Content Texts below)
- Footer with border-top and email
- Use `<strong>` tags for inline bold text per Figma

---

## Content Texts (Exact from Figma)

### Hero Card
- **Title:** Runnable
- **Subtitle:** Building a running app for safer outdoor workouts.
- **Type of project:** UX Project
- **Process:** From scratch
- **Client:** Personal project (tag)
- **Reading time:** Reading time: 10 minutes

### Section: User story
Serena, 25 years old, has just moved to a new town. She is very **active** and has always **loved running**: she goes for a jog three times a week, and she loves exploring new routes on her longest run. However, since she moved, **she struggles to find routes near her that cover her usual distances and, more importantly, make her feel safe during her solo runs.**
She doesn't know any runners in the area, and she doesn't want to give up her outdoor workouts just because she feels unsafe and disoriented.
How can we help her?

### Section: Problem
People who start running or change their preferred running routes often struggle to find new routes that match their running preferences, such as distance, elevation, and scenery.

For solo runners, finding routes that also feel safe becomes a significant challenge, especially when they lack local guidance or someone to ask.

**How can we create an app that helps solo runners find new running routes that match their preferences and also make them feel safe?**

### Section: Target users
The target users for the app are **running enthusiast of every age** who want to discover new routes near their location and are concerned about the condition and the safety of the route.

### Section: Costumer journey
For the user, I hypothesized 5 steps of their experience with the app:

1. **Consider:** the user considers trying a new running route.
2. **Research:** the user searches for a running route.
3. **Choose a route:** the user selects the route that best suits their workout.
4. **Run:** the user goes for a run on the chosen route.
5. **Register and rate:** the user logs their workout and rates the route.

### Section: Primary research

#### Subtitle: Objectives
I wanted to understand key aspects of safety perception and route selection during running:

1. **Safety perception**: how runners perceive safety, which may differ from actual safety and varies by gender, age, and experience.
2. **Search process**: how runners look for new routes.
3. **Decision**: how runners choose a route for their workout.
4. **Activity registration**: which details of the run users want to record.
5. **Communication**: how users describe and share route information with friends or fellow runners.

#### Subtitle: Set up
- **Participants**: due to the project's small scale and the lack of monetary incentives, the study involved 3 participants (1 male, 2 females).
- **Type of research**: semi-structured interview

#### Subtitle: Insights and suggestions

**Insight 1 (bordered box):**
Everyone has a different safe perception, which can be influenced by gender or age.

**Suggestion 1 (grey box):**
Don't rely solely on a safety perception rating. Instead, **have users evaluate routes based also on objective factors that influence safety perception,** such as the presence of other people and pedestrian-friendly areas.

**Insight 2 (bordered box):**
People tend to report to other runners the characteristics of a route that they find important, and do not change their description based on the listener.

**Suggestion 2 (grey box):**
Information to register for each run:
- **Route-based:** mileage, distance from the starting point, inclination, type of road, number of drinking fountains, beauty of the landscape.
- **Performance-based:** pace (average and for km), calories burned, heart rate, distance covered.
- **Safety related aspects:** presence of other people, presence of other runners, number of streetlights, presence of vehicles.
- **Others:** weather of the day, mood before and after the run, perceived fatigue during the run.

**Insight 3 (bordered box with darker border):**
Runners are different:
- Not every runner plans their runs (this often depends on their experience and weekly mileage - the more they run, the more they tend to plan).
- Exploring new routes without knowing what to expect is more common when visiting new places or when they have no time constraints, such as on holidays or weekends.
- Searching for new routes isn't always methodical, because some runners simply start running and explore.

**Suggestion 3 (grey box):**
This information helped defining **four types of user personas**.

### Section: Personas

1. **Newbies**: people new to running who want to find the best and safest routes for their workouts. *(image: Humaaans - Standing copia.png, left)*

2. **Experienced runners**: those who run longer distances and need to plan routes that match their scheduled mileage. *(image: Humaaans - Standing 1.png, right)*

3. **Solitary runners**: runners who run alone and don't feel safe. *(image: Humaaans - Standing.png, left)*

4. **Explorers and Spontaneous runners**: Runners who enjoy discovering new places in their area or when visiting new locations for leisure or work. They are open to sharing their routes with friends and the community. *(image: Humaaans - Standing copia 2.png, right)*

### Section: Competitor analysis

**Intro paragraph:**
**Strava** and **Komoot** have been identified as the two main competitor given their relevance on the market, the features proposed, and their marketing strategies.

**Table (4 columns, 3 rows + header):**

| Competitor | Features | Selling points and marketing themes | Focus |
|------------|----------|-------------------------------------|-------|
| **Strava** | • Register and share your workouts<br>• Visualize your workout history<br>• Create and save new routes<br>• Progress tracking<br>• Monthly challenges<br>• Interaction with other users | • Focus on community interaction<br>• Partnership with influencers<br>• Ambassadors participate to running events<br>• "Social-media" - like interaction structure<br>• Community-driven contents | Run, Swim, Walk, Hike, Cycling |
| **Komoot** | • Search new routes<br>• Plan workouts (save a route for another day)<br>• Register your activity<br>• Create and save new routes<br>• Rate the routes | • Adventure and exploration<br>• Focus on sport activities you can do in the mountains<br>• Simple UX<br>• Great for planning your outdoor activities | Run (more trail run), Hike, Cycling (mountain bike) |

**Conclusion paragraphs:**
Unlike competitors, our app focuses on two main themes: **safety** and **exploration**.

Planning your workout in advance not only enhances your perception of safety but also enables you to discover new parts of your city or a new place without the fear of the unknown. Viewing comments and feedback from other users helps you better plan your runs and feel safer, especially when running alone. For spontaneous runners, registering and sharing new routes benefits others who want to explore your area.

### Section: Sitemaps and userflows
Here is the sitemap of the app and the userflows for the two main features: **search** (and save) and **register** the workout.

*(Placeholder for board/image)*

### Section: Lean branding

#### Subtitle: Values

**Values Table (2 columns):**

| We are | We are not |
|--------|------------|
| • Reliable<br>• Simple<br>• Communal | • Overcomplicated<br>• Uninspiring<br>• Exclusive |

#### Subtitle: Primary color palette
*(Image: Palette.png, 529px width)*

### Section: Designs

#### Subtitle: Search

**Row 1 (text left, image right):**
One of the app's most important features is the search function: users should be able to find the ideal route based on their **current location**, **desired distance from the route's starting point**, and **preferred route characteristics**.
*(Image placeholder for static mockup)*

**Row 2 (text left, image right):**
The results are displayed both **on the map** and **as cards**: users can click on either to view route details and **save the route for later**.
*(Image placeholder for static mockup)*

#### Subtitle: Activity

**Row (image left, text right):**
In the Activity section, users can view **details of their past workouts** saved in the app, as well as **the routes they plan to try** in upcoming sessions.
*(Image placeholder for static mockup)*

#### Subtitle: Registration

**Row 1 (text left, image right):**
When starting a run - whether on a chosen route or a new one - users can **register their activity**. They must activate GPS and have also the option to connect a smartwatch or sensor to track heart rate and calories burned.
*(Image placeholder for static mockup)*

**Row 2 (text left, image right):**
After the run, the user can choose to **save the workout data** and complete a questionnaire to **rate the route and overall experience**.
*(Image placeholder for static mockup)*

**Row 3 (text above, 2 images centered):**
When the registered run is done on a new route, the user also needs to **choose and enter a name for the route** and **answer an additional question in the questionnaire.**
*(Images: Register-New route.png, Register-New route-Type of road copia.png, 252px width each)*

**Row 4 (text left, image right - tall):**
If the user decides to **skip the questionnaire or certain parts of it**, the details screen will display a button inviting the user to complete the questionnaire.
*(Image: Activity - Past Runs - Detaills.png, 216px width, tall scroll)*

#### Subtitle: Homescreen and community

**Text:**
Finally, there are two additional sections: the **Homescreen**, where users can view their profile picture, badges, and running program (selected at onboarding and editable in settings); and the **Community section**, where users can view posts from others and find local running groups to join. The Community feature is designed for solo runners who want to connect with others for workouts.

*(Images: Home.png, Community-Groups.png, Community-Your Feed.png, 3 images in a row, 216px/252px widths)*

### Section: Testing

#### Subtitle: Methods
After developing the first version and prototypes, a first round of testing is needed before the next design iteration. It is essential to determine if the app's two main features—the search and registration—are intuitive and function well.

#### Subtitle: Experimental design
- **Participants**: at this stage, 5 participants are enough to gather major insights and highlight major usability issues.
- **Testing duration**: 1 hour.
- **Instructions**: after answering a few demographic questions, participants will be instructed to open the Home screen and explore the app for a few minutes (e.g., examining the toolbar) while thinking aloud. Next, they will complete two tasks: first, they will use the search section to find and save a specific route; then, they will locate the saved route in the Activity section, simulate starting a run, register the activity, and review the questionnaire. Participants should continue to think aloud throughout the tasks.

#### Subtitle: Measures
- **Task success rate**: whether participants complete each task successfully without help.
- **Time on task**: how long it takes for participants to complete each task.
- **Error rate and types**: keeping track of user errors or misunderstandings during tasks, such as mis-clicks, navigation mistakes, or confusion about UI elements.
- **Think-aloud data**: analysis of participants' verbal comments for pain points, confusion, and feedback.

### Footer
reb.guerrini@gmail.com

---

### 2. Add CSS Tokens to `:root` in `style.css` (~line 15)

```css
--color-green-100: #E7F8E9;
--color-neutral-100: #F3F4F6;
--color-neutral-400: #9CA3AF;
--color-neutral-500: #6B7280;
--color-destructive-100: #FEE2E2;
```

### 3. Add Case Study CSS to `style.css` (~line 400)

#### Page Layout
- `.case-study-page`: white background, 80px padding-x
- `.case-study-main`: flex column, 80px gap, align-items center, full width
- `.case-study-hero`: flex row, `--color-primary-50` bg, 16px radius, 28px/32px padding, 40px gap
- `.case-study-hero__image`: 366px width, 273px height, 16px radius, object-fit cover
- `.case-study-hero__info`: flex column, justify space-between, flex 1
- `.case-study-hero__meta`: flex row, 16px gap (label regular, value semibold)
- `.back-link`: 28px size, flex with 10px gap, `--color-secondary-400` on hover

#### Content Container
- `.case-study-content`: 640px width, centered, 80px section gap
- `.section`: 16px/20px padding, 24px internal gap (32px for some sections)
- `.section__title`: Poppins SemiBold 28px/36px, centered, -0.196px letter-spacing
- `.section__subtitle`: Poppins SemiBold 20px/28px, centered, -0.196px letter-spacing

#### Step Boxes
- `.step-box`: 16px padding, 8px radius, full width
- `.step-box--violet`: `--color-secondary-50` background
- `.step-box--green`: `--color-green-100` background

#### Insight/Suggestion Boxes
- `.insight-box`: 1px border `--color-neutral-400`, 16px padding, 8px radius
- `.insight-box--dark`: 1px border `--color-neutral-500`
- `.suggestion-box`: `--color-neutral-100` background, 16px padding, 8px radius

#### Personas
- `.persona-row`: flex, 16px gap, align-items center
- `.persona-row--reverse`: flex-direction row-reverse
- `.persona-image`: height 200px, width auto

#### Tables
- `.competitor-table-wrapper`: overflow-x auto
- `.competitor-table`: display flex, 16px gap, min-width 1012px
- `.competitor-table__column`: flex column, 16px gap
- `.competitor-table__column--competitor`: 140px width
- `.competitor-table__column--focus`: 265px width
- `.competitor-table__header`: `--color-green-100` bg, 80px height, 16px radius, 16px padding, centered text, semibold
- `.competitor-table__cell`: 250px height, 8px/16px padding
- `.competitor-table__cell--violet`: `--color-secondary-50` background, 16px radius
- `.values-table`: display flex, 16px gap
- `.values-table__column`: 346.5px width
- `.values-table__header`: 16px padding, 16px radius, semibold text, centered
- `.values-table__header--green`: `--color-green-100` bg
- `.values-table__header--red`: `--color-destructive-100` bg
- `.values-table__cell`: 200px height, 8px/16px padding

#### Mockups
- `.mockup-grid`: flex, 24px gap, justify-content center
- `.mockup-row`: flex, 24px gap, align-items center, full width
- `.mockup-row--reverse`: flex-direction row-reverse
- `.mockup-image`: 16px radius, box-shadow `0px 1px 4px rgba(0,0,0,0.25)`
- `.mockup-image--phone`: 278px width, auto height
- `.mockup-image--medium`: 252px width, auto height
- `.mockup-image--small`: 216px width, auto height

#### Palette
- `.palette-image`: 529px width, auto height, 8px radius, box-shadow `0px 0px 3px rgba(0,0,0,0.25)`

### 4. Update `projects.html`

Change line 54 from `href="#"` to `href="runnable.html"` on the Runnable card's CTA button.

## Assets Used

From `public/images/runnable/`:
- `Register-New route.png` - Hero card image + Registration section
- `Register-New route-Type of road copia.png` - Registration section
- `Home.png` - Homescreen mockup
- `Community-Groups.png` - Community groups mockup
- `Community-Your Feed.png` - Community feed mockup
- `Activity - Past Runs - Detaills.png` - Activity details mockup (long scroll)
- `Palette.png` - Color palette image
- `Humaaans - Standing copia.png` - Newbies persona
- `Humaaans - Standing 1.png` - Experienced runners persona
- `Humaaans - Standing.png` - Solitary runners persona
- `Humaaans - Standing copia 2.png` - Explorers persona

## Design Tokens Reference

### Colors
- `--color-primary-50: #E7F3F5` - Light teal (hero card, table cells)
- `--color-secondary-50: #F3EFF7` - Light purple (violet step boxes, tag, competitor cells)
- `--color-secondary-400: #734F88` - Purple (active nav, back link hover)
- `--color-green-100: #E7F8E9` - Light green (green boxes, table headers)
- `--color-neutral-100: #F3F4F6` - Light gray (suggestion boxes)
- `--color-neutral-400: #9CA3AF` - Gray (insight box borders)
- `--color-neutral-500: #6B7280` - Darker gray (insight box border variant)
- `--color-neutral-700: #374151` - Dark gray (reading time text)
- `--color-neutral-900: #111827` - Near black (text)
- `--color-destructive-100: #FEE2E2` - Light red ("We are not" header)

### Typography
- Section titles: Poppins SemiBold 28px/36px, -0.196px letter-spacing
- Subtitles: Poppins SemiBold 20px/28px, -0.196px letter-spacing
- Body: Poppins Regular 16px/24px
- Bold inline: Poppins SemiBold or Medium 16px
- Hero title: Poppins SemiBold 18px/28px
- Hero subtitle: Poppins Regular 16px/24px
- Tag: Poppins Regular 12px/20px
- Reading time: Poppins Regular 14px/1.45

### Spacing
- Page padding: 80px horizontal
- Section gap: 80px
- Internal section gap: 24px or 32px
- Step box gap: 16px
- Insight/suggestion gap: 20px
- Table column gap: 16px
- Mockup gap: 24px
- Hero card padding: 28px horizontal, 32px vertical
- Hero card gap: 40px
