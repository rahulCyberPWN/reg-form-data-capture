import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, Shield, FileText, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-6">
            Organization Registration Portal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Streamline your organization registration with our comprehensive platform. 
            Ensure compliance, manage data protection, and get started quickly.
          </p>
          <Link to="/register">
            <Button variant="professional" size="lg" className="text-lg px-8 py-6">
              Start Registration
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="shadow-[var(--shadow-form)] hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
            <CardHeader className="text-center">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Organization Setup</CardTitle>
              <CardDescription>
                Complete organization information and legal entity details
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-[var(--shadow-form)] hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
            <CardHeader className="text-center">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Legal Compliance</CardTitle>
              <CardDescription>
                Register with regulatory authorities and maintain compliance
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-[var(--shadow-form)] hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Data Protection</CardTitle>
              <CardDescription>
                Implement GDPR compliance and data retention policies
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-[var(--shadow-form)] hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Contact Management</CardTitle>
              <CardDescription>
                Centralize contact information and address details
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Quick Info Section */}
        <Card className="max-w-3xl mx-auto shadow-[var(--shadow-form)]">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Why Choose Our Platform?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-lg mb-2">🚀 Fast Setup</h3>
                <p className="text-muted-foreground">Complete registration in minutes with our guided process</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">🔒 Secure</h3>
                <p className="text-muted-foreground">Your data is protected with enterprise-grade security</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">✅ Compliant</h3>
                <p className="text-muted-foreground">Built-in compliance features for regulatory requirements</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;