import styles from './DirectoryControls.module.css';

export default function DirectoryControls({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange
}) {
  return (
    <div className={styles.controls}>
      <input
        type="text"
        placeholder="Search student by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.searchInput}
      />

      <div>
        <button
          type="button"
          onClick={() => onStatusFilterChange('all')}
          className={`${styles.filterButton} ${
            statusFilter === 'all' ? styles.activeFilter : ''
          }`}
        >
          All
        </button>

        <button
          type="button"
          onClick={() => onStatusFilterChange('deansLister')}
          className={`${styles.filterButton} ${
            statusFilter === 'deansLister' ? styles.activeFilter : ''
          }`}
        >
          Dean's Listers
        </button>

        <button
          type="button"
          onClick={() => onStatusFilterChange('probation')}
          className={`${styles.filterButton} ${
            statusFilter === 'probation' ? styles.activeFilter : ''
          }`}
        >
          On Probation
        </button>
      </div>
    </div>
  );
}