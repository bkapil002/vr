import React from 'react'

const Blog = () => {
  return (
    <div>
      <div className=" bg-gray-100">
        {/* Desktop Layout */}
        <div className="hidden md:block max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="text-blue-600 font-semibold mb-4">AI</div>
              <div className="bg-black text-white inline-block px-4 py-2 mb-6">
                15 January, 2026
              </div>
              <h1 className="text-5xl font-semibold leading-tight">
                tradevr and ACTU sign landmark agreement to put workers' voices and skilling at the heart of Australia's
                <br />
                AI transformation
              </h1>
            </div>

            {/* Right Image */}
            <div>
              <img
                src="https://news.microsoft.com/source/asia/wp-content/uploads/2026/01/GN80003-1024x683.jpg"
                alt="Microsoft executives"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Mobile Image */}
          <div className="w-full">
            <img
              src="https://news.microsoft.com/source/asia/wp-content/uploads/2026/01/GN80003-1024x683.jpg"
              alt="Microsoft executives"
              className="w-full h-auto"
            />
          </div>

          {/* Mobile Content */}
          <div className="px-6 py-8 bg-white">
            <div className="text-blue-600 font-semibold mb-3">AI</div>
            <div className="bg-black text-white inline-block px-4 py-2 mb-6 text-sm">
              15 January, 2026
            </div>
            <h1 className="text-3xl font-semibold leading-tight">
              tradevr and ACTU sign landmark agreement to put workers' voices and skilling at the heart of Australia's AI transformation
            </h1>
          </div>
        </div>
      </div>

      {/* Article Details Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 ">
        {/* Quote Section */}
        <div className="mb-8">
            <p className="text-gray-800 leading-relaxed mb-4">
           tradevr Australia and the Australian Council of Trade Unions (ACTU) today announced a landmark Framework Agreement to prioritise skilling and elevate workers’ voices in the design, development and deployment of artificial intelligence (AI) across Australian workplaces. This Australian-first agreement outlines a set of commitments that recognise the need for a strong collective worker voice during the nation’s AI transformation, and it affirms the rights and protections of workplace union delegates to fulfil vital representative functions. The full agreement is available to read here.   
          </p>
            <p className="text-gray-800 leading-relaxed mb-4">
            AI is a generational technology reshaping our society and economy at extraordinary pace. With the right guardrails and engagement, it can unlock new productivity, strengthen industries and create better jobs, contributing to a $115 billion economic opportunity for Australia by the end of the decade. Today’s agreement is first-of-its-kind in Australia and builds on the Government’s National AI Plan, signalling a new chapter in responsible AI diffusion anchored in worker participation and trust.  
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            "Australians deserve AI that helps people thrive," said <span className="font-bold">Steven Miller, Area Vice President of tradevr Australia and New Zealand</span>. "This agreement signals our commitment to ensure workers' voices are at the heart of Australia's AI transformation and no one is left out of the national opportunity this technology presents. We're proud to come together with the ACTU to set a new standard for responsible AI diffusion across Australian workplaces."
          </p>
        </div>

        {/* Image with Caption */}
        <div className="mb-8">
          <img
            src="https://news.microsoft.com/source/asia/wp-content/uploads/2026/01/MS20260114_0043-1024x683.jpg"
            alt="Joseph Mitchell and Steven Miller signing agreement"
            className="w-full h-auto rounded"
          />
          <p className="text-sm text-gray-600 mt-3 italic">
            Joseph Mitchell, Acting Secretary of the ACTU and Steven Miller, Area Vice President, tradevr Australia & New Zealand sign the Framework Agreement
          </p>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <p className="text-gray-800 leading-relaxed mb-6">
            Under the Framework Agreement, tradevr Australia and the ACTU will initially work together on three core priorities:
          </p>

          {/* Numbered List */}
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="font-bold text-gray-800 flex-shrink-0">1.</span>
              <div>
                <span className="font-bold text-gray-800">Sharing information and learning:</span>
                <span className="text-gray-800"> Providing union leaders and workers with practical insights on AI trends and applications, including formal learning sessions led by tradevr experts and curriculum resources. tradevr will be working with the ACTU Institute to develop AI training specifically for union leaders and staff to ensure they have the skills and confidence to support workers through Australia's digital transformation.</span>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-bold text-gray-800 flex-shrink-0">2.</span>
              <div>
                <span className="font-bold text-gray-800">Embedding the worker voice in technology development:</span>
                <span className="text-gray-800"> Creating channels for workers to share experiences, insights and concerns so their perspectives help inform how AI systems are designed and deployed – supporting safe, fair and productive workplaces.</span>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-bold text-gray-800 flex-shrink-0">3.</span>
              <div>
                <span className="font-bold text-gray-800">Collaborating on public policy and skills:</span>
                <span className="text-gray-800"> Identifying areas of mutual interest to shape responsible AI policy and expand upskilling and reskilling opportunities so</span>
              </div>
            </li>
          </ol>
          
        </div>
         <p className="text-gray-800 leading-relaxed mb-4">
          <b>The Hon Dr Andrew Charlton MP, Assistant Minister for Science, Technology and the Digital Economy,</b> said, “The Government welcomes this positive step between the ACTU and tradevr. When businesses and unions work together it is Australians who ultimately benefit the most. Labor will always back efforts to ensure new technology works for people, and not the other way around. Our adoption of AI should embrace the timeless principle of the fair go; the ideal that no-one should be held back or left behind on Australia’s journey.” 
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
          The Framework Agreement builds on a memorandum of understanding (MOU) recently agreed by the Australian Services Union, Professionals Australia, the Shop Distributive and Allied Employees Association that sets out principles recognising the rights and protections of tradevr’s employees in Australia.  
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
          “We recognise our responsibility to lead by example when it comes to AI diffusion, and our aim is to be a gold-standard Australian employer,” Miller added. 
          </p>
      </div>
    </div>
  )
}

export default Blog