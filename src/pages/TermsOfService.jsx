export default function TermsOfService() {
  return (
    <div className="min-h-screen mt-16 bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 border-t-8 border-blue-500">
        <h1 className="text-4xl font-extrabold text-blue-500 mb-6 text-center">Terms of Service</h1>
        <p className="mb-6 text-lg text-gray-700">
          Welcome to Chat with BPM. By accessing our platform, you agree to the following terms and conditions. Please read them carefully.
        </p>
        <ul className="list-decimal pl-6 space-y-4 text-base text-gray-800 leading-relaxed">
          <li>You agree not to misuse the service, including attempting unauthorized access or distributing harmful software.</li>
          <li>We may update these terms at any time. Your continued use of the service implies acceptance of any changes.</li>
          <li>Your account may be suspended for any breach of these terms or inappropriate conduct.</li>
          <li>You retain ownership of your content but give us the right to use and process it for platform functionality.</li>
          <li>AI responses are provided “as-is” and should not replace expert human judgment in critical decisions.</li>
          <li>Third-party integrations are subject to their own terms and privacy policies.</li>
          <li>We do not guarantee uninterrupted service and may modify or discontinue services without notice.</li>
          <li>All users must comply with local, national, and international laws while using the service.</li>
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          <li>We reserve the right to limit or terminate access to our services at our discretion.</li>
        </ul>
      </div>
    </div>
  );
}
