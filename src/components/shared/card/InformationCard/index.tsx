import { MouseEventHandler } from "react";
import BaseCard, { BaseCardProps } from "../BaseCard";
import Button from "@/components/atoms/Button.component";
export type InfoCardProps = {
  title: BaseCardProps["title"];
  pill: BaseCardProps["pill"];
  className: BaseCardProps["className"];
  id: string;
  description: string;
  footerTitle: string;
  footerText: string;
  buttonText: string;
  onButtonClick: MouseEventHandler;
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  id,
  description,
  footerTitle,
  footerText,
  buttonText,
  pill,
  className,
  onButtonClick,
  ...rest
}) => {
  return (
    <BaseCard
      title={title}
      key={id}
      className={className}
      pill={pill}
      {...rest}
    >
      <div className="flex flex-col my-3 w-full justify-between">
        <div className="my-1 text-gray-400">{description}</div>
        <div className="flex my-1 justify-between items-center">
          {footerTitle && (
            <div className="text-gray-400">
              {footerTitle}
              <span className="text-gray-200">{footerText} </span>
            </div>
          )}
          {buttonText && <Button onClick={onButtonClick}>{buttonText}</Button>}
        </div>
      </div>
    </BaseCard>
  );
};

export default InfoCard;
