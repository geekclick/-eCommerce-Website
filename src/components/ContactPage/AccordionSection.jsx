import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "./chevron-down.png";
import styles from "./AccordionSection.module.css";
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <img className={styles.chevron} src={chevronDown} alt="Chevron Down" />
      </>
    }
    className="text-[#5e5d5d] text-right  text-[0.7rem] md:text-[1rem] lg:text-[1rem]"
    buttonProps={{
      className: ({ isEnter }) =>
        `text-[0.7rem] md:text-[1rem] lg:text-[1.2rem] border-b-[1px] border-[#E6E6E6]  cursor-pointer flex items-center w-full m-0  text-left text-white bg-transparent flex-row-reverse p-6 ${
          isEnter && styles.itemBtnExpanded
        }`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

const items = [
  {
    header: "توضیح اولیه توضیح اولیه توضیح اولیه توضیح اولیه",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالا",
  },
  {
    header: "توضیح اولیه توضیح اولیه توضیح اولیه توضیح اولیه",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالا",
  },
];

export default function AccordionSection() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 md:w-3/4 lg:w-3/4">
        <div className={styles.accordion}>
          <Accordion transition transitionTimeout={250} allowMultiple>
            <h1 className="text-white text-right text-[1rem] md:text-[1.3rem] lg:text-[2rem]">
              عنوان
            </h1>
            {items.map(({ header, content }, i) => (
              <AccordionItem header={header} key={i}>
                {content}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
