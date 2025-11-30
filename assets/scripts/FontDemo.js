function DemoFont(container, fontFamily, remSize) {
    AppendElement(container, "h1", fontFamily, fontFamily, remSize * 3.157);
    AppendElement(container, "p", "A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z 0 1 2 3 4 5 6 7 8 9 ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~", fontFamily, remSize * 2);

    //perfect fourth font scale
    AppendElement(container, "h2", "Heading 2", fontFamily, remSize * 2.369);
    AppendElement(container, "h3", "Heading 3", fontFamily, remSize * 1.777);
    AppendElement(container, "h4", "Heading 4", fontFamily, remSize * 1.333);
    AppendElement(container, "h5", "Heading 5", fontFamily, remSize);
    AppendElement(container, "h6", "Heading 6", fontFamily, remSize * 0.75);
    AppendElement(container, "a", "This is a link", fontFamily, remSize);
    AppendElement(container, "p", "I have heard that nothing gives an author so great pleasure, as to find his works respectfully quoted by other learned authors. This pleasure I have seldom enjoyed; for tho' I have been, if I may say it without vanity, an eminent author of almanacs annually now a full quarter of a century, my brother authors in the same way, for what reason I know not, have ever been very sparing in their applauses; and no other author has taken the least notice of me, so that did not my writings produce me some solid pudding, the great deficiency of praise would have quite discouraged me.", fontFamily, remSize);
    AppendElement(container, "p", "I concluded at length, that the people were the best judges of my merit; for they buy my works; and besides, in my rambles, where I am not personally known, I have frequently heard one or other of my adages repeated, with, as Poor Richard says, at the end on't; this gave me some satisfaction, as it showed not only that my instructions were regarded, but discovered likewise some respect for my authority; and I own, that to encourage the practice of remembering and repeating those wise sentences, I have sometimes quoted myself with great gravity.", fontFamily, remSize * 0.8);
    AppendElement(container, "p", "Judge then how much I must have been gratified by an incident I am going to relate to you. I stopped my horse lately where a great number of people were collected at a vendue of merchant goods.The hour of sale not being come, they were conversing on the badness of the times, and one of the company called to a plain clean old man, with white locks, \"Pray, Father Abraham, what think you of the times? Won't these heavy taxes quite ruin the country? How shall we be ever able to pay them? What would you advise us to? \"Father Abraham stood up, and replied, \"If you'd have my advice, I'll give it you in short, for a word to the wise is enough, and many words won't fill a bushel, as Poor Richard says.\" They joined in desiring him to speak his mind, and gathering round him, he proceeded as follows: ", fontFamily, remSize * 0.5);
}

function AppendElement(container, tagName, innerText, fontFamily, fontSize) {
    var div = document.createElement("div");
    div.style.display = "block";
    div.style.position = "relative";
    div.style.border = "2px solid black";
    div.style.marginBottom = "1rem";
    div.style.padding = "1rem";
    div.style.paddingTop = "36px"; //To compensate for the absolute size label
    div.style.overflowX = "auto";

    var title = document.createElement("p");
    title.innerText = `<${tagName}> ${fontSize}px`;
    title.style.color = "white";
    title.style.backgroundColor = "black";
    title.style.padding = "5px";
    title.style.margin = "0";
    title.style.position = "absolute";
    title.style.top = "0";
    title.style.left = "0";
    title.style.fontFamily = "courier";
    title.style.fontSize = "16px";

    var el = document.createElement(tagName);
    el.innerText = innerText;
    el.style.fontFamily = fontFamily;
    el.style.display = "block";
    el.style.fontSize = fontSize + "px";
    el.style.margin = "0";
    el.style.padding = "0";
    el.setAttribute("contenteditable", "true");

    if (tagName == "a") {
        el.href = "#";
    }

    div.appendChild(title);
    div.appendChild(el);
    container.appendChild(div);
}