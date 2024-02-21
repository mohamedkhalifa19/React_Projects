import { ReactNode, useState } from "react";
import "./index.scss";
import { X } from "lucide-react";

interface IProps {
  title: string;
  type: string;
  icon: ReactNode;
}

const Alert = ({ title, type, icon }: IProps) => {
  const [display, setDisplay] = useState(false);
  return (
    <div className={`${type} ${display ? "hidden" : ""}`}>
      <div className="alert-header">
        <div className="alert-title">
          <span>{icon}</span>
          <h4>{title}</h4>
        </div>
        <X
          className="close"
          size={30}
          onClick={() => {
            setDisplay(!display);
          }}
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        deserunt eum, quos delectus eos obcaecati iste sapiente saepe aliquid
        ipsa iusto! Officiis praesentium accusantium possimus, repellendus
        voluptatum amet ut itaque rerum asperiores consequuntur ipsum non nulla
        ullam aliquam tempore similique.
      </p>
    </div>
  );
};

export default Alert;
