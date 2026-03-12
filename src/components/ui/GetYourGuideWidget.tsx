type GetYourGuideWidgetProps = {
  campaign?: string;
  numberOfItems?: number;
};

export default function GetYourGuideWidget({
  campaign = "visit_uffizi_widget",
  numberOfItems = 4,
}: GetYourGuideWidgetProps) {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-12">
      <div className="rounded-lg border border-gold/20 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-center text-2xl font-bold text-navy">
          Popular Tours & Activities
        </h2>
        <div
          data-gyg-href="https://widget.getyourguide.com/default/activities.frame"
          data-gyg-locale-code="en-US"
          data-gyg-widget="activities"
          data-gyg-number-of-items={numberOfItems}
          data-gyg-cmp={campaign}
          data-gyg-partner-id="Z35Q282"
          data-gyg-tour-ids="914317,1142368,1151106,1170306"
        >
          <span>
            Powered by{" "}
            <a
              target="_blank"
              rel="sponsored noopener noreferrer"
              href="https://www.getyourguide.com/florence-l32/"
            >
              GetYourGuide
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
