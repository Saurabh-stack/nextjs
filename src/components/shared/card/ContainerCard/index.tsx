import { classNames } from "@/helpers/classNames"

interface Props  {
    className?: string;
    children: React.ReactNode;
}

const ContainerCard: React.FC<Props> = ({className, children}) => {
    return (
        <div
          className={classNames(
            `mx-8 my-5 px-8 py-8 border-2 border-signature_border rounded-2xl`,
            className
          )}
        >
          <div className="h-full w-full">{children}</div>
        </div>
      );
}

export default ContainerCard