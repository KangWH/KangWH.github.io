import { Fragment } from "react";
import { activities } from "@/data/site";

export function ActivityList() {
  return (
    <section>
      <h2>활동</h2>
      <dl className="my-2 grid grid-cols-1 gap-y-2 sm:grid-cols-[10rem_1fr] sm:gap-x-4">
        {activities.map((activity) => (
          <Fragment key={`${activity.period}-${activity.description}`}>
            <dt>{activity.period}</dt>
            <dd>{activity.description}</dd>
          </Fragment>
        ))}
      </dl>
    </section>
  );
}
