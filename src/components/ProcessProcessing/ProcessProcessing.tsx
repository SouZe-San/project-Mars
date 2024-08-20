import CircularProgress from "./CircularProgress ";
import "./process-style.scss";
import { useInView } from "react-intersection-observer";
const ProcessProcessing = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div className="" ref={ref}>
      <h1 className="header_tag mb-12">Processing of Becoming a Marsian</h1>
      <div className="flex justify-between pt-24">
        <div className="text-box w-1/5 flex-grow-0 flex items-center">
          <p>
            The process become a Marsian could be exhausting, but it is so exciting that it could
            certainly make you stay their if you could.
          </p>
        </div>
        <div className="process-box flex w-2/3 justify-between">
          <div className="process">
            {inView && <CircularProgress limit={333} percentage={25} durationLimit={4} />}
            <h2 className="te">Preparation</h2>
          </div>
          <div className="process">
            {inView && <CircularProgress limit={227} percentage={50} durationLimit={4} />}
            <h2 className="te">Boarding</h2>
          </div>
          <div className="process">
            {inView && <CircularProgress limit={100} percentage={75} durationLimit={5} />}
            <h2 className="te">Traveling</h2>
          </div>
          <div className="process ">
            {inView && <CircularProgress limit={1} percentage={100} durationLimit={6} />}
            <h2 className="te">Landing</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessProcessing;
