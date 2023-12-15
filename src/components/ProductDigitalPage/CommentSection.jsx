import { useState } from "react";
import { useDispatch } from "react-redux";
let commentData = { date: "", name: "", email: "", comment: "" };

function CommentSection() {
  const [value, setValue] = useState(commentData);
  return (
    <div className="product--about-comment-section">
      <div className="comment-section-label - flex justify-between items-center mb-[1em]">
        <a
          href="#"
          className="other-comments - text-[#e6e6e6] text-center text-[0.7rem] md:text-[0.8rem] lg:text-[0.8rem] not-italic font-normal leading-[1.625rem] [text-decoration-line:underline] hover:text-[#00d5ff] focus:text-[#00d5ff]"
        >
          مشاهده نظرات دیگران
        </a>
        <p className="comment-section-title - text-[#e6e6e6] text-center text-[1rem] md:text-[1.6rem] lg:text-[1.6rem] not-italic font-normal leading-[normal]">
          نظرات
        </p>
      </div>
      <div className="comment-section-boxs - flex flex-col">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addComment({ ...value, date: `${new Date()}` }));
            setValue(commentData);
          }}
        >
          <input
            value={value.name}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="نام"
            name=""
            className="comment-section-name comment-section-input - w-full outline-[none] bg-[#5e5e5e] text-[#e6e6e6] border-[none] text-right text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] not-italic font-normal leading-10 tracking-[-0.00781rem] mb-[0.4em] px-[0.7em] py-[0] break-words"
          />
          <input
            value={value.email}
            onChange={(e) => setValue(e.target.value)}
            type="email"
            placeholder="ایمیل"
            name=""
            className="comment-section-email comment-section-input - w-full outline-[none] bg-[#5e5e5e] border-[none] text-right text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] not-italic font-normal leading-10 tracking-[-0.00781rem] mb-[0.4em] px-[0.7em] py-[0] break-words text-[#e6e6e6]"
          />
          <input
            value={value.comment}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="نظر شما"
            name=""
            className="comment-section-comment comment-section-input - w-full outline-[none] bg-[#5e5e5e] border-[none] text-right text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] not-italic font-normal leading-10 tracking-[-0.00781rem] mb-[0.4em] px-[0.7em] py-[0] break-words text-[#e6e6e6] pb-[7em]"
          />
          <button className="comment-section-button - border-[1px] border-[solid] border-[#00d5ff] w-[30%] outline-[none] bg-[#00d5ff] text-[#2e2e2e] text-center text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] not-italic font-normal leading-[1.625rem] px-[1em] py-[0.4em] [transition:0.3s] hover:cursor-pointer hover:border-[1px] hover:border-[solid] hover:border-[#00d5ff] hover:bg-[#2e2e2e] hover:text-[#00d5ff] focus:cursor-pointer focus:border-[1px] focus:border-[solid] focus:border-[#00d5ff] focus:bg-[#2e2e2e] focus:text-[#00d5ff]">
            ثبت نظر
          </button>
        </form>
      </div>
    </div>
  );
}
export default CommentSection;
