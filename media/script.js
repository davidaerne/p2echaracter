/* Spell Section Container */
.spell-section {
  border: 1px solid #660000;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
}

/* Spell Header */
.spell-header {
  background: #660000;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.spell-header:hover {
  background: #990000;
}

/* Spell Slots */
.spell-slots {
  display: flex;
  gap: 5px;
}

.slot {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid white;
}

.slot.active {
  background: white;
}

.slot.inactive {
  background: #660000;
}

/* Spell Body */
.spell-body {
  display: none;
  background: #f9f9f9;
  padding: 10px;
}

/* Spell Entry */
.spell-entry {
  margin-bottom: 10px;
}

.spell-name {
  font-weight: bold;
  color: #660000;
}

.spell-info {
  display: block;
  font-size: 12px;
  color: #333;
}

.spell-description {
  font-size: 14px;
  color: #555;
  margin-top: 5px;
}
