import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/routes';
import NavBar from './components/layout/Navbar';
import Menu from './components/layout/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  })

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
      <div>
        <NavBar/>
        <AppRoutes />
      </div>
      </QueryClientProvider>
    </Router>
  );
}

export default App;