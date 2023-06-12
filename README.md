# dictionary app

Sideland : **## words and meanings**

> ### Overview :

- **Say one word!**
- Words simply put are useful to make sense in a sentence. If you will to say something to someone you don't kick spelling letters with you feets but use words coming out from your mouth. It is neccessary and of one a great importance to know about words and their meanings. One fact is because words used casually might cut out the sense given to your thoughts and sentences. When you are a public personnality, a star , and have popularity on one field, you need to be careful about what you say because one word can make you stand as a skillfull or a good person as well as in reverse perceived like a trash or an evil . It all depends if you have right used words in your speech, and also of the **context** that brought you out to argue about what has been asked or your opinion on something.

## Interest

You might be interested on how:

- to filter word and re-render DOM using `useEffect Hook` of react

- or use `bootstrap` inside a _react project_

### Links

- Solution URL: [https://github.com/BeinRain06/dictionary-app.git](https://github.com/BeinRain06/dictionary-app.git)
- Live Site URL: [https://beinrain06.github.io/dictionary-app/](https://beinrain06.github.io/dictionary-app/)

## Description : \* challenge issue

**1. error failed code 429**

> i got that error in my <App/> component when fectching external API data coming from the web APi: **dictionary api dev**. The real issue given by this error according to this code **429** is :**Too many requests**. It was due to the fact that in the code underneath :

`const fetchDictionnaryWord = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
);

**-->** console.log ("dico data:", response.data);

      const results = await response.data;

**-->** setDataWord(results);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (err) {
      console.log(err);
    }

};`

> **what was going on**

- I was calling the two lines above marked by arrow(**-->**) at the same time . I have to call one at the time. Either `console.log ("dico data:", response.data);` or `setDataWord(results);` but not the both at the same time;

**2. error cannot update a component while rendering another component**

> initially i want to set a **useState Hook** to count everytime i click the **Search icon** and **re-render the dom** after doing that . But i **break** some rules of **react** not according to change state in a **child component** while this state has been firslty declared in a **parent component**. Here have a pattern look over my mistake:
>
> 1. first doing in **<App/>** i declared ` const [count, setCount] = useState(0);`
> 2. i passed **count** and **setCount** to a child of <App/> component

- `<SearchBar
  count={count}
  setCount={setCount}
/>`
  > 2. i end set up **count** with an onClick event in my button
- `<button
  className="btn_wrapper d-flex flex-center"
  onClick={**setCount(count + 1 )**}
  >
      <i className="bi bi-search"></i>
  </button>`
  **not great, here i got an error**

> **what was going on**

- I needed to write function to set **count** in the parent element <App/> and then pass down **this function** as a **props**. It has to be like:
- 1. in **<App/>** writing :
  - `
const handleCount= (e) => {
  e.preventDefault();
  setCount(count + 1)
}`
- 2. passings **props**
  - `<SearchBar
  handleCount={handleCount}
/>`
- 3. implementing props in the onClick Event
  - `<button
    className="btn_wrapper d-flex flex-center"
    onClick={handleCount}
    > <i className="bi bi-search"></i> > </button>`

> After correctly implement these step the error **cannot update a component while rendering another component** was fixed.
>
> **3. creating slider in the x-axis**
> I really thanks **kevin Powell** on **Youtube** with his bunch of **tutorial** helping **people** to better understand how **css** work. The tutorial about **create a horizontal media scroller with css** help me figure out how to **use** `Grid css` to shift content from the **Y-axis** to the **X-axis** by doing some simply change :

1. inside the container **div**:
   - display: **grid**
   - grid-auto-flow: **column**
   - grid-auto-columns: **100%** //for me
   - overflow-x: **auto**

- and **so on...**

> **analyzing**

## CSS Structures:

> two main components in your <App/>:
> -SearchBar.jsx, and MeaningsBox.jsx

**Picture**

---

![./Desktop-Dictionary-App.png](./Desktop-Dictionary-App.png)

---

# What I learned

### Use Bootstrap Classes in React

All we need to do is to install bootstrap and import **minified version** of css and js in the **indexjs** file of our project.
After that we can use and learn about classes of bootstrap in the source website : [https://getbootstrap.com](https://getbootstrap.com)
Like this:

- command(inside our directory project) : npm install bootstrap
- add :
  - import "bootstrap/dist/css/bootstrap.min.css";
  - import "bootstrap/dist/js/bootstrap.bundle.min";
- Use Classes you need searching over the bunch of classes given in the official website _getbootstrap.com_

### Achieve Carousel slider in React

- we need to install the module `react-responsive-carousel` via **npm** `npm install react-responsive-carousel` or **yarn** `yarn add react-responsive-carousel`
- we will be also import `<Carousel><Carousel/>` in the right component where we implement it .
- also import some **minified css** style for \*\*Carousel :
  - `import { Carousel } from "react-responsive-carousel";
    import "react-responsive-carousel/lib/styles/carousel.min.css";
`
- and straightly implement it . See under my <MeaningsBox.jsx> file how it was done.

### to carefully use `useState Hook` in parent and children components.

### utilities Materials:

    -bootstrap and bootstrap icons

### Mobile Responsiveness

    - Mobile reponsiveness for mobile min-width: 210px

**Picture**

---

![./Mobile-Dictionary-App.png](./Mobile-Dictionary-App.png)

---

## Callback History:

- Language allows us to share our thoughts, ideas, emotions, and intenion with others. Over thousands of years , humans have developed a wide variety of system o assign specific meaning to sounds, forming words and systems of gramma tocreate **languages**. Many languages developed written forms using symbols to visully record their meaning. Some languages lik American Sign Language (ASL), are an entirely visual laguage without the need for vocalizations.
- Although Languages are defined by rules, heir are by no means static, and evolve over time. Some languages are incredibly old and have changed ve little over time. Others languages evolve rapidly by incorporating **elements of others languages**
- Still other languages die out due to political oppression or social assimilaion, though many dying languages **live on** in the vocabularies and dialects of prominent languages around the world.

src: _National Geography Education_
[https://education.nationalgeographic.org/rsource/evolution-langauge/](https://education.nationalgeographic.org/rsource/evolution-langauge/)

## Useful Resources :

- makeuseOf.com: [https://www.makeuseof.com/react-js-interactive-carousel-build/](https://www.makeuseof.com/react-js-interactive-carousel-build/) : was my base to quickly build my slider using basic carousel. I thanks the owner of the website for his brief and concise article.

  >

- Kevin Powell[Youtube]: [https://www.youtube.com/watch?v=3yfswsnD2sw&t=1260s](https://www.youtube.com/watch?v=3yfswsnD2sw&t=1260s) : My Guide to thourougly implement **X-axis** orientation of my **dictionary card**

## Acknowledge:

This project always remember the Team :

- **Sufa Digital**: udemy with his enlightment about the feature to achieve this project
  >
- **Kevin Powell** : with his help with a realistic example of an horizontal **carts slider**
  >
- **[makeuseof.com]** to help me quickly implement `Carousel`.

_Our Work always remember this team_

## Author

- Frontend Mentor - [https://www.frontendmentor.io/profile/BeinRain06](https://www.frontendmentor.io/profile/BeinRain06)
- Twitter - [https://twitter.com/nest_Ngoueni](https://twitter.com/nest_Ngoueni)
