import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10 sm:p-6">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-medium text-primary">
            Welcome to TimBitER
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Streamlined emergency care coordination for clinicians and patients
          </h1>
          <p className="text-gray-600 leading-relaxed">
            TimBitER helps doctors and patients manage appointments, follow-ups,
            and medical research in one place. Quickly find specialists, book
            visits, review histories, and stay informed with timely updates.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              For new users
            </h2>
            <p className="text-gray-600 mb-4">
              Create your account to set up your role, share availability, and
              start collaborating with your care team.
            </p>
            <Link
              to="/signup1"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary transition-colors"
            >
              Sign up
            </Link>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Returning users
            </h2>
            <p className="text-gray-600 mb-4">
              Access your dashboard to manage appointments, messages, and
              patient or doctor profiles.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Log in
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 text-sm text-gray-700">
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="font-semibold text-gray-900 mb-1">Appointment flow</p>
            <p className="text-gray-600">
              Book, reschedule, and track ER and follow-up visits with clear
              timelines.
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="font-semibold text-gray-900 mb-1">
              Care collaboration
            </p>
            <p className="text-gray-600">
              Coordinate with clinicians, share updates, and keep patient data
              organized.
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="font-semibold text-gray-900 mb-1">
              Research & insights
            </p>
            <p className="text-gray-600">
              Search medical literature and bookmark key findings directly in
              your workflow.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            to="/login"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary transition-colors"
          >
            Continue to login
          </Link>
          <Link
            to="/signup1"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            Start signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
