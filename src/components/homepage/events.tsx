/** @jsx jsx */
import * as React from "react"
import { jsx, Box, Card } from "theme-ui"
import { Link as TLink } from "theme-ui"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Carousel from "./carousel"
import { events, EventItem } from "../../data/homepage"
import tagColor from "../../utils/tag-color"

const EventCard = (event: EventItem) => (
  <Card sx={{ p: 0, borderRadius: `8px`, overflow: `hidden`, border: `1px solid`, borderColor: `divide`, height: `100%` }}>
    {event.image ? (
      <Box as="img" src={event.image} alt="" sx={{ width: `100%`, height: `140px`, objectFit: `cover`, display: `block` }} />
    ) : (
      <Box
        sx={{
          width: `100%`,
          height: `140px`,
          background: (t) => `linear-gradient(135deg, ${t.colors?.primary}, ${t.colors?.muted})`,
        }}
      />
    )}
    <Box sx={{ p: 2 }}>
    <Box sx={{ display: `flex`, justifyContent: `space-between`, flexWrap: `wrap`, alignItems: `baseline` }}>
      <Box sx={{ fontSize: `13px`, fontWeight: `bold`, color: `heading` }}>{event.title}</Box>
      <Box sx={{ fontSize: `10px`, color: `secondary` }}>{event.date}</Box>
    </Box>
    <p sx={{ color: `secondary`, fontSize: `11px`, mt: 1, mb: 1 }}>{event.description}</p>
    {event.tags.length > 0 && (
      <Box sx={{ display: `flex`, flexWrap: `wrap`, gap: 1, mb: 1 }}>
        {event.tags.map((tag) => (
          <Box
            key={tag}
            sx={{
              fontSize: `9px`,
              color: `white`,
              bg: tagColor(tag),
              borderRadius: `999px`,
              px: `6px`,
              py: `2px`,
            }}
          >
            {tag}
          </Box>
        ))}
      </Box>
    )}
    <TLink href={event.link} sx={{ fontSize: `10px` }}>
      View post →
    </TLink>
    </Box>
  </Card>
)

type EventsProps = {
  hideTitle?: boolean
}

const Events = ({ hideTitle = false }: EventsProps) => (
  <section sx={{ mb: [3, 4] }}>
    {!hideTitle && <Title text="Events" />}
    <Carousel
      items={events}
      getKey={(item, i) => `${item.title}-${i}`}
      basis={[`92%`, `48%`, `48%`]}
      renderItem={(item) => <EventCard {...item} />}
    />
  </section>
)

export default Events
