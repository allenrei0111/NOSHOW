import React, { useState } from 'react';

const SizeGuide = () => {
  const [selectedCategory, setSelectedCategory] = useState('women');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="size-guide">
      <h2>Size Guide</h2>
      <div className="category-buttons">
        <button
          className={selectedCategory === 'women' ? 'active' : ''}
          onClick={() => handleCategoryChange('women')}
        >
          Women's
        </button>
        <button
          className={selectedCategory === 'men' ? 'active' : ''}
          onClick={() => handleCategoryChange('men')}
        >
          Men's
        </button>
        <button
          className={selectedCategory === 'kids' ? 'active' : ''}
          onClick={() => handleCategoryChange('kids')}
        >
          Kids
        </button>
      </div>

      {selectedCategory === 'women' && (
        <>
          <h3>Women's Denim Fit Guide</h3>
          <table>
            <thead>
              <tr>
                <th>Size (Alpha)</th>
                <th>Bust</th>
                <th>Waist</th>
                <th>Hip</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>XS</td>
                <td>33.5 - 35"</td>
                <td>25 - 26.5"</td>
                <td>37.5 - 39"</td>
              </tr>
              <tr>
                <td>S</td>
                <td>35.5 - 37"</td>
                <td>27 - 28.5"</td>
                <td>39.5 - 42"</td>
              </tr>
              {/* Add more rows for Women's Denim Fit Guide */}
            </tbody>
          </table>
        </>
      )}

      {selectedCategory === 'men' && (
        <>
          <h3>Men's Denim Fit Guide</h3>
          <table>
            <thead>
              <tr>
                <th>Size (Numeric)</th>
                <th>Bust</th>
                <th>Waist</th>
                <th>Hip</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>33.5 - 34"</td>
                <td>25 - 25.5"</td>
                <td>35.5 - 36"</td>
              </tr>
              <tr>
                <td>2</td>
                <td>34.5 - 35"</td>
                <td>26 - 26.5"</td>
                <td>36.5 - 37"</td>
              </tr>
              {/* Add more rows for Men's Denim Fit Guide */}
            </tbody>
          </table>
        </>
      )}

      {selectedCategory === 'kids' && (
        <>
          <h3>Kid's Size Guide</h3>
          <table>
            <thead>
              <tr>
                <th>Size</th>
                <th>Age</th>
                <th>Height</th>
                <th>Chest</th>
                <th>Waist</th>
                <th>Hip</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2T</td>
                <td>2 Years</td>
                <td>33 - 36"</td>
                <td>20.5 - 21"</td>
                <td>20.5 - 21"</td>
                <td>20.5 - 21"</td>
              </tr>
              <tr>
                <td>3T</td>
                <td>3 Years</td>
                <td>36 - 39"</td>
                <td>21 - 21.5"</td>
                <td>21 - 21.5"</td>
                <td>21 - 21.5"</td>
              </tr>
              {/* Add more rows for Kid's Size Guide */}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default SizeGuide;
