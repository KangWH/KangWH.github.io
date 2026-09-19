import { Fragment } from "react";
import { activities } from "@/data/site";

export function ActivityList() {
  return (
    <section>
      <h2>활동</h2>
      <dl className="grid grid-cols-[8rem_auto]">
        {activities.map((activity) => (
          <Fragment key={`${activity.period}-${activity.description}`}>
            <dt className="font-[200]">{activity.period}</dt>
            <dd>{activity.description}</dd>
          </Fragment>
        ))}
      </dl>
    </section>
  );
}
