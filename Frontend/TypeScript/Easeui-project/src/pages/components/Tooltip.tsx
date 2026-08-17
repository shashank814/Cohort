// pages/TooltipPage.tsx

import { Tooltip } from "../../components/Tooltip/Tooltip";
import { ComponentPreview } from "../../components/Tooltip/ComponentPreview/ComponentPreview";

const TooltipPage = () => {

  // Code for Top Tooltip

  const topTooltipCode = `<Tooltip text="Tooltip on top" position="top">
  <button className="px-4 py-2 border rounded-lg">
    Top
  </button>
</Tooltip>`;

  // Code for Bottom Tooltip

  const bottomTooltipCode = `<Tooltip text="Tooltip on bottom" position="bottom">
  <button className="px-4 py-2 border rounded-lg">
    Bottom
  </button>
</Tooltip>`;

  // Code for Left Tooltip

  const leftTooltipCode = `<Tooltip text="Tooltip on left" position="left">
  <button className="px-4 py-2 border rounded-lg">
    Left
  </button>
</Tooltip>`;

  // Code for Right Tooltip

  const rightTooltipCode = `<Tooltip text="Tooltip on right" position="right">
  <button className="px-4 py-2 border rounded-lg">
    Right
  </button>
</Tooltip>`;

  // Code for Icon Tooltip

  const iconTooltipCode = `<Tooltip text="Help Center">
  <button className="p-3 border rounded-lg">
    ❓
  </button>
</Tooltip>`;

  // Code for Info Tooltip

  const infoTooltipCode = `<Tooltip text="Extra info shown here">
  <div className="p-4 border rounded-lg">
    Tooltips are great for providing context.
  </div>
</Tooltip>`;

  // Code for Premium Tooltip


  const premiumTooltipCode = `<Tooltip text="Premium Feature Available">
  <button className="p-4 bg-indigo-100 rounded-lg">
    💎 Premium
  </button>
</Tooltip>`;


  return (
    <div className="min-h-screen bg-gray-50 p-8">

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Tooltip
          </h1>

          <p className="text-gray-600 max-w-2xl">
            Tooltips display informative text when users hover over,
            focus on, or tap an element.
          </p>

        </div>

        {/* Basic Examples */}

        <section className="mb-12">

          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Basic Examples
          </h2>

          <p className="text-gray-500 mb-6">
            Tooltips can be positioned on the top, bottom, left, or right.
          </p>


          {/* Top */}

          <div className="mb-6">

            <h3 className="text-lg font-medium mb-3">
              Top
            </h3>

            <ComponentPreview code={topTooltipCode}>

              <Tooltip
                text="Tooltip on top"
                position="top"
              >
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  Top
                </button>
              </Tooltip>

            </ComponentPreview>

          </div>


          {/* Bottom */}

          <div className="mb-6">

            <h3 className="text-lg font-medium mb-3">
              Bottom
            </h3>

            <ComponentPreview code={bottomTooltipCode}>

              <Tooltip
                text="Tooltip on bottom"
                position="bottom"
              >
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  Bottom
                </button>
              </Tooltip>

            </ComponentPreview>

          </div>


          {/* Left */}

          <div className="mb-6">

            <h3 className="text-lg font-medium mb-3">
              Left
            </h3>

            <ComponentPreview code={leftTooltipCode}>

              <Tooltip
                text="Tooltip on left"
                position="left"
              >
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  Left
                </button>
              </Tooltip>

            </ComponentPreview>

          </div>


          {/* Right */}

          <div className="mb-6">

            <h3 className="text-lg font-medium mb-3">
              Right
            </h3>

            <ComponentPreview code={rightTooltipCode}>

              <Tooltip
                text="Tooltip on right"
                position="right"
              >
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  Right
                </button>
              </Tooltip>

            </ComponentPreview>

          </div>

        </section>

        {/* Advanced Examples */}

        <section className="mb-12">

          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Examples
          </h2>

          <p className="text-gray-500 mb-6">
            Tooltips can be used with icons, text, buttons, and other elements.
          </p>


          {/* Icon Tooltip */}

          <div className="mb-6">

            <h3 className="text-lg font-medium mb-3">
              Icon Tooltip
            </h3>

            <ComponentPreview code={iconTooltipCode}>

              <Tooltip text="Help Center">

                <button className="p-3 border rounded-lg hover:bg-gray-50">
                  ❓
                </button>

              </Tooltip>

            </ComponentPreview>

          </div>


          {/* Info Tooltip */}

          <div className="mb-6">

            <h3 className="text-lg font-medium mb-3">
              Info Tooltip
            </h3>

            <ComponentPreview code={infoTooltipCode}>

              <Tooltip text="Extra info shown here">

                <div className="p-4 border rounded-lg cursor-help">
                  Tooltips are great for providing context.
                </div>

              </Tooltip>

            </ComponentPreview>

          </div>


          {/* Premium Tooltip */}

          <div className="mb-6">

            <h3 className="text-lg font-medium mb-3">
              Rich Tooltip
            </h3>

            <ComponentPreview code={premiumTooltipCode}>

              <Tooltip text="Premium Feature Available">

                <button className="p-4 bg-indigo-100 rounded-lg hover:bg-indigo-200">
                  💎 Premium
                </button>

              </Tooltip>

            </ComponentPreview>

          </div>

        </section>

        <div className="p-5 rounded-xl bg-indigo-50 border border-indigo-100">

          <p className="text-indigo-700">
            💡 Keep tooltip content concise and helpful. Use tooltips
            to provide additional context without cluttering the interface.
          </p>

        </div>

      </div>

    </div>
  );
};

export default TooltipPage;