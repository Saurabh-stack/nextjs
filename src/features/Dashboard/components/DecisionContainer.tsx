import ContainerCard from "@/components/shared/card/ContainerCard";
import BaseCard from "@/components/shared/card/BaseCard";
import Button_Chakra from "@/components/atoms/Button.component";
import { DecideTxt, TopDecisionTxt } from "@/helpers/constants";

type Props = {};

function DecisionContainer({}: Props) {
  const handleDecideClick = (decisionId: string) => {};
  return (
    <ContainerCard>
      <span className="text-2xl text-gray-300">{TopDecisionTxt}</span>
      <div className="grid grid-cols-4 gap-8 mt-5 mb-5">
        <BaseCard title={"obj.title"}>
          <div className="flex flex-col my-3 w-full justify-between">
            <div className="my-1 text-gray-400">{"obj.description"}</div>
            <div className="flex my-1 justify-between items-center">
              <div className="text-gray-400">
                Due Date:{" "}
                <span className="text-gray-200">{"obj.dueDate"} </span>
              </div>
              <Button_Chakra onClick={() => handleDecideClick("obj.id")}>
                {DecideTxt}
              </Button_Chakra>
            </div>
          </div>
        </BaseCard>
      </div>
    </ContainerCard>
  );
}

export default DecisionContainer;
