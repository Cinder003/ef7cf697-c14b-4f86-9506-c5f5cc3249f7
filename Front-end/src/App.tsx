import ProspectManagementPage from './pages/ProspectManagementPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-800 font-sans">
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: '#dcfce7',
              color: '#166534',
              border: '1px solid #86efac',
            },
            iconTheme: {
              primary: '#22c55e',
              secondary: 'white',
            },
          },
          error: {
            style: {
              background: '#fee2e2',
              color: '#991b1b',
              border: '1px solid #fca5a5',
            },
            iconTheme: {
              primary: '#ef4444',
              secondary: 'white',
            },
          },
        }}
      />
      <main>
        <ProspectManagementPage />
      </main>
    </div>
  );
}

export default App;