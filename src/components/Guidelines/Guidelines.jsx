import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import { BodyText, SectionBadge } from '../Common'
import rules from './data.json';

const Guidelines = () => {
  return (
      <div className="w-full flex flex-col mt-3 py-6 px-10 lg:px-24 gap-y-10">
        <SectionBadge id="rules">The Rules & Regulations</SectionBadge>
        <div className="p-8 py-10 rounded-3xl flex flex-col items-center lg:items-start bg-base-200">
          {rules.map((rule, index) => {
            return (
                <Fragment key={index}>
                  <BodyText
                      className={twMerge(
                          'tracking-[0.32px] leading-[108%] font-medium font-cabinet',
                          index === rules.length - 1 ? 'text-black' : 'text-black/60'
                      )}>
                    {rule}
                  </BodyText>
                  {index === rules.length - 1 ? null : <hr className="w-full border-black/10 my-5" />}
                </Fragment>
            );
          })}
        </div>
      </div>
  );
};

export default Guidelines;