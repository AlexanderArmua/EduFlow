'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Report } from '@/lib/mockData';

interface ReportPreviewModalProps {
  report: Report;
  onClose: () => void;
}

export default function ReportPreviewModal({ report, onClose }: ReportPreviewModalProps) {
  const { t } = useLanguage();

  const handleDownload = (format: string) => {
    alert(`Downloading report as ${format.toUpperCase()}... (This is a demo)`);
    onClose();
  };

  // Generate sample data based on report type
  const getSampleData = () => {
    if (report.type === 'academic') {
      return [
        { student: 'Emily Johnson', gpa: '3.8', attendance: '95%', assignments: '28/30', grade: 'A' },
        { student: 'Michael Chen', gpa: '3.6', attendance: '92%', assignments: '27/30', grade: 'A-' },
        { student: 'Sarah Williams', gpa: '3.9', attendance: '98%', assignments: '30/30', grade: 'A+' },
        { student: 'David Martinez', gpa: '3.5', attendance: '88%', assignments: '26/30', grade: 'B+' },
        { student: 'Jessica Brown', gpa: '3.7', attendance: '94%', assignments: '29/30', grade: 'A' },
      ];
    } else if (report.type === 'financial') {
      return [
        { student: 'Emily Johnson', tuition: '$12,000', paid: '$12,000', balance: '$0', status: 'Paid' },
        { student: 'Michael Chen', tuition: '$12,000', paid: '$8,000', balance: '$4,000', status: 'Partial' },
        { student: 'Sarah Williams', tuition: '$12,000', paid: '$12,000', balance: '$0', status: 'Paid' },
        { student: 'David Martinez', tuition: '$12,000', paid: '$6,000', balance: '$6,000', status: 'Partial' },
        { student: 'Jessica Brown', tuition: '$12,000', paid: '$12,000', balance: '$0', status: 'Paid' },
      ];
    } else if (report.type === 'attendance') {
      return [
        { student: 'Emily Johnson', present: '38', absent: '2', attendance: '95%', tardiness: '0' },
        { student: 'Michael Chen', present: '37', absent: '3', attendance: '92%', tardiness: '2' },
        { student: 'Sarah Williams', present: '39', absent: '1', attendance: '98%', tardiness: '0' },
        { student: 'David Martinez', present: '35', absent: '5', attendance: '88%', tardiness: '3' },
        { student: 'Jessica Brown', present: '38', absent: '2', attendance: '95%', tardiness: '1' },
      ];
    } else if (report.type === 'behavioral') {
      return [
        { student: 'Emily Johnson', incidents: '0', type: 'N/A', severity: 'N/A', resolution: 'N/A' },
        { student: 'Michael Chen', incidents: '1', type: 'Tardiness', severity: 'Low', resolution: 'Warning' },
        { student: 'Sarah Williams', incidents: '0', type: 'N/A', severity: 'N/A', resolution: 'N/A' },
        { student: 'David Martinez', incidents: '2', type: 'Disruption', severity: 'Medium', resolution: 'Parent Meeting' },
        { student: 'Jessica Brown', incidents: '0', type: 'N/A', severity: 'N/A', resolution: 'N/A' },
      ];
    } else {
      return [
        { metric: 'Total Students', value: '450', change: '+12%', trend: '↑' },
        { metric: 'Average GPA', value: '3.65', change: '+0.05', trend: '↑' },
        { metric: 'Attendance Rate', value: '94%', change: '+2%', trend: '↑' },
        { metric: 'Revenue', value: '$5.4M', change: '+8%', trend: '↑' },
        { metric: 'Completion Rate', value: '92%', change: '+3%', trend: '↑' },
      ];
    }
  };

  const getTableHeaders = () => {
    if (report.type === 'academic') {
      return ['Student Name', 'GPA', 'Attendance', 'Assignments', 'Grade'];
    } else if (report.type === 'financial') {
      return ['Student Name', 'Tuition', 'Paid', 'Balance', 'Status'];
    } else if (report.type === 'attendance') {
      return ['Student Name', 'Present', 'Absent', 'Attendance %', 'Tardiness'];
    } else if (report.type === 'behavioral') {
      return ['Student Name', 'Incidents', 'Type', 'Severity', 'Resolution'];
    } else {
      return ['Metric', 'Value', 'Change', 'Trend'];
    }
  };

  const sampleData = getSampleData();
  const headers = getTableHeaders();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="bg-salesforce-darkblue text-white p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">{report.name}</h2>
            <p className="text-gray-300 text-sm mt-1">{t.reporting.builder.preview}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-3xl font-bold leading-none"
          >
            ×
          </button>
        </div>

        {/* Report Preview Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-gray-50">
          {/* Report Header */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">EduFlow CRM</h1>
                <p className="text-gray-600 mt-1">Education Management System</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Report Date</p>
                <p className="font-semibold">{new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{report.name}</h2>
              <p className="text-gray-600 text-sm">{report.description}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t">
              <div>
                <p className="text-xs text-gray-600">{t.reporting.frequency}</p>
                <p className="font-semibold">{t.reporting.frequencies[report.frequency as keyof typeof t.reporting.frequencies]}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">{t.reporting.format}</p>
                <p className="font-semibold">{report.format.toUpperCase()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">{t.reporting.createdBy}</p>
                <p className="font-semibold text-sm">{report.createdBy}</p>
              </div>
            </div>
          </div>

          {/* Report Data Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b-2 border-gray-300">
                  <tr>
                    {headers.map((header, idx) => (
                      <th key={idx} className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sampleData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      {Object.values(row).map((value, cellIdx) => (
                        <td key={cellIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Report Summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h3 className="font-bold text-gray-900 mb-3">Summary</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Total Records</p>
                <p className="text-2xl font-bold text-salesforce-blue">{sampleData.length}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Generated On</p>
                <p className="text-lg font-semibold">{new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Report Footer */}
          <div className="mt-6 text-center text-xs text-gray-500 border-t pt-4">
            <p>Generated by EduFlow CRM • Confidential Information</p>
            <p className="mt-1">© {new Date().getFullYear()} EduFlow. All rights reserved.</p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-100 px-6 py-4 flex justify-between items-center border-t">
          <div className="text-sm text-gray-600">
            {report.recipients && report.recipients.length > 0 && (
              <span>Will be sent to {report.recipients.length} recipient(s)</span>
            )}
          </div>
          <div className="flex gap-3">
            <button onClick={onClose} className="sf-button-secondary">
              {t.reporting.builder.cancel}
            </button>
            <button
              onClick={() => handleDownload('pdf')}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
            >
              📄 {t.reporting.download} PDF
            </button>
            <button
              onClick={() => handleDownload('excel')}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              📊 {t.reporting.download} Excel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
