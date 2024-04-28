import React from 'react';
import './style.css';

const FeeStructure = () => {
  const feeData = {
    kindergarten: [
      { grade: 'Nursery', tuitionFees: 1500, otherFees: 200 },
      { grade: 'Pre-K', tuitionFees: 1800, otherFees: 250 }
    ],
    preparatorySchool: [
      { grade: 'Grade 1', tuitionFees: 2000, otherFees: 300 },
      { grade: 'Grade 2', tuitionFees: 2200, otherFees: 350 }
    ],
    juniorHighSchool: [
      { grade: 'Grade 7', tuitionFees: 2500, otherFees: 400 },
      { grade: 'Grade 8', tuitionFees: 2700, otherFees: 450 }
    ],
    seniorHighSchool: [
      { grade: 'Grade 10', tuitionFees: 3000, otherFees: 500 },
      { grade: 'Grade 11', tuitionFees: 3200, otherFees: 550 }
    ]
  };

  return (
    <div>
      <h1>Fee Structure</h1>

      <h2>Kindergarten</h2>
      <table className="fee-table">
        <thead>
          <tr>
            <th>Grade</th>
            <th>Tuition Fees (per term)</th>
            <th>Other Fees</th>
            <th>Total Fees (per term)</th>
          </tr>
        </thead>
        <tbody>
          {feeData.kindergarten.map((fee, index) => (
            <tr key={index}>
              <td>{fee.grade}</td>
              <td>Ksh{fee.tuitionFees}</td>
              <td>Ksh{fee.otherFees}</td>
              <td>Ksh{fee.tuitionFees + fee.otherFees}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Preparatory School</h2>
      <table className="fee-table">
        <thead>
          <tr>
            <th>Grade</th>
            <th>Tuition Fees (per term)</th>
            <th>Other Fees</th>
            <th>Total Fees (per term)</th>
          </tr>
        </thead>
        <tbody>
          {feeData.preparatorySchool.map((fee, index) => (
            <tr key={index}>
              <td>{fee.grade}</td>
              <td>Ksh{fee.tuitionFees}</td>
              <td>Ksh{fee.otherFees}</td>
              <td>Ksh{fee.tuitionFees + fee.otherFees}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Junior High School</h2>
      <table className="fee-table">
        <thead>
          <tr>
            <th>Grade</th>
            <th>Tuition Fees (per term)</th>
            <th>Other Fees</th>
            <th>Total Fees (per term)</th>
          </tr>
        </thead>
        <tbody>
          {feeData.juniorHighSchool.map((fee, index) => (
            <tr key={index}>
              <td>{fee.grade}</td>
              <td>Ksh{fee.tuitionFees}</td>
              <td>Ksh{fee.otherFees}</td>
              <td>Ksh{fee.tuitionFees + fee.otherFees}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Senior High School</h2>
      <table className="fee-table">
        <thead>
          <tr>
            <th>Grade</th>
            <th>Tuition Fees (per term)</th>
            <th>Other Fees</th>
            <th>Total Fees (per term)</th>
          </tr>
        </thead>
        <tbody>
          {feeData.seniorHighSchool.map((fee, index) => (
            <tr key={index}>
              <td>{fee.grade}</td>
              <td>Ksh{fee.tuitionFees}</td>
              <td>Ksh{fee.otherFees}</td>
              <td>Ksh{fee.tuitionFees + fee.otherFees}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="note">
        Note: Fees are subject to change. Please contact us for the most up-to-date information.
      </p>
    </div>
  );
};

export default FeeStructure;
