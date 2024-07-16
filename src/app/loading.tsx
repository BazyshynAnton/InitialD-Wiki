import styles from '@/styles/loading/Loading.module.scss'

export default function Loading() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'black',
        position: 'relative',
        zIndex: '99999',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className={styles.animLine} />
    </div>
  )
}
