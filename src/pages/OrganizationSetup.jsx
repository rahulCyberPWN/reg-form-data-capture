import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Building2, Mail, Phone, MapPin, Shield, FileText } from "lucide-react";

const OrganizationSetup = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    department_name: "",
    legal_entity_name: "",
    registration_number: "",
    tax_id: "",
    regulatory_authority: "",
    organization_type: "",
    industry_sector: "",
    data_usage_summary: "",
    data_retention_policy: "",
    dpo_email: "",
    contact_phone: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    logo_url: "",
    organization_name: "",
    contact_email: "",
    is_active: true,
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Organization setup data:", formData);
    toast({
      title: "Setup Complete!",
      description: "Your organization has been set up successfully.",
    });
  };

  const organizationTypes = [
    "Private Limited",
    "Public Limited",
    "Partnership",
    "Sole Proprietorship",
    "Non-Profit",
    "Government",
    "Other"
  ];

  const industrySectors = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Manufacturing",
    "Retail",
    "Consulting",
    "Other"
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">Organization Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="organization_name">Organization Name *</Label>
                <Input
                  id="organization_name"
                  value={formData.organization_name}
                  onChange={(e) => updateFormData("organization_name", e.target.value)}
                  placeholder="Enter organization name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="legal_entity_name">Legal Entity Name *</Label>
                <Input
                  id="legal_entity_name"
                  value={formData.legal_entity_name}
                  onChange={(e) => updateFormData("legal_entity_name", e.target.value)}
                  placeholder="Enter legal entity name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="department_name">Department Name</Label>
                <Input
                  id="department_name"
                  value={formData.department_name}
                  onChange={(e) => updateFormData("department_name", e.target.value)}
                  placeholder="e.g., IT Department"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="organization_type">Organization Type *</Label>
                <Select onValueChange={(value) => updateFormData("organization_type", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select organization type" />
                  </SelectTrigger>
                  <SelectContent>
                    {organizationTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="industry_sector">Industry Sector *</Label>
                <Select onValueChange={(value) => updateFormData("industry_sector", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry sector" />
                  </SelectTrigger>
                  <SelectContent>
                    {industrySectors.map((sector) => (
                      <SelectItem key={sector} value={sector}>
                        {sector}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="logo_url">Logo URL</Label>
                <Input
                  id="logo_url"
                  value={formData.logo_url}
                  onChange={(e) => updateFormData("logo_url", e.target.value)}
                  placeholder="https://example.com/logo.png"
                  type="url"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">Legal & Compliance Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="registration_number">Registration Number *</Label>
                <Input
                  id="registration_number"
                  value={formData.registration_number}
                  onChange={(e) => updateFormData("registration_number", e.target.value)}
                  placeholder="Enter registration number"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tax_id">Tax ID *</Label>
                <Input
                  id="tax_id"
                  value={formData.tax_id}
                  onChange={(e) => updateFormData("tax_id", e.target.value)}
                  placeholder="Enter tax identification number"
                  required
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="regulatory_authority">Regulatory Authority</Label>
                <Input
                  id="regulatory_authority"
                  value={formData.regulatory_authority}
                  onChange={(e) => updateFormData("regulatory_authority", e.target.value)}
                  placeholder="e.g., Data Protection Authority"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">Data Protection & Privacy</h3>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="data_usage_summary">Data Usage Summary *</Label>
                <Textarea
                  id="data_usage_summary"
                  value={formData.data_usage_summary}
                  onChange={(e) => updateFormData("data_usage_summary", e.target.value)}
                  placeholder="Describe how your organization processes and uses data"
                  className="min-h-[100px]"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="data_retention_policy">Data Retention Policy *</Label>
                <Textarea
                  id="data_retention_policy"
                  value={formData.data_retention_policy}
                  onChange={(e) => updateFormData("data_retention_policy", e.target.value)}
                  placeholder="Describe your data retention policy and timeframes"
                  className="min-h-[100px]"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dpo_email">Data Protection Officer Email</Label>
                <Input
                  id="dpo_email"
                  type="email"
                  value={formData.dpo_email}
                  onChange={(e) => updateFormData("dpo_email", e.target.value)}
                  placeholder="dpo@example.com"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">Contact Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contact_email">Contact Email *</Label>
                <Input
                  id="contact_email"
                  type="email"
                  value={formData.contact_email}
                  onChange={(e) => updateFormData("contact_email", e.target.value)}
                  placeholder="contact@example.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact_phone">Contact Phone *</Label>
                <Input
                  id="contact_phone"
                  type="tel"
                  value={formData.contact_phone}
                  onChange={(e) => updateFormData("contact_phone", e.target.value)}
                  placeholder="+1234567890"
                  required
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address_line1">Address Line 1 *</Label>
                <Input
                  id="address_line1"
                  value={formData.address_line1}
                  onChange={(e) => updateFormData("address_line1", e.target.value)}
                  placeholder="123 Main Street"
                  required
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address_line2">Address Line 2</Label>
                <Input
                  id="address_line2"
                  value={formData.address_line2}
                  onChange={(e) => updateFormData("address_line2", e.target.value)}
                  placeholder="Suite 100"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => updateFormData("city", e.target.value)}
                  placeholder="New York"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="state">State/Province *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => updateFormData("state", e.target.value)}
                  placeholder="NY"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="postal_code">Postal Code *</Label>
                <Input
                  id="postal_code"
                  value={formData.postal_code}
                  onChange={(e) => updateFormData("postal_code", e.target.value)}
                  placeholder="10001"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => updateFormData("country", e.target.value)}
                  placeholder="United States"
                  required
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2 pt-4">
              <Checkbox
                id="is_active"
                checked={formData.is_active}
                onCheckedChange={(checked) => updateFormData("is_active", !!checked)}
              />
              <Label htmlFor="is_active" className="text-sm">
                Set organization as active immediately upon registration
              </Label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Complete Your Organization Setup</h1>
          <p className="text-muted-foreground">
            Now let's set up your organization with detailed information
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-[var(--transition-smooth)] ${
                    step <= currentStep
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`w-12 h-0.5 mx-2 transition-[var(--transition-smooth)] ${
                      step < currentStep ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="shadow-[var(--shadow-form)]">
          <CardHeader>
            <CardTitle>Step {currentStep} of 4</CardTitle>
            <CardDescription>
              {currentStep === 1 && "Basic organization details"}
              {currentStep === 2 && "Legal and compliance information"}
              {currentStep === 3 && "Data protection policies"}
              {currentStep === 4 && "Contact and address information"}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {renderStep()}
              
              <div className="flex justify-between pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                
                {currentStep < 4 ? (
                  <Button
                    type="button"
                    variant="professional"
                    onClick={handleNext}
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="professional"
                  >
                    Complete Setup
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrganizationSetup;