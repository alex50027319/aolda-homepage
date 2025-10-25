export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About AOLDA</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate professionals dedicated to delivering excellence in every project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses with innovative technology solutions that drive growth and success.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading provider of transformative digital solutions worldwide.
            </p>
          </div>

          {/* Values */}
          <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Innovation, integrity, and customer satisfaction guide everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


