"""Create web copies and a social card without overwriting source photographs.
Run with Python and Pillow installed: python3 scripts/prepare-images.py
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parent.parent
assets = root / 'src/assets'
for source, sizes in [('landscape.png', [640, 1200]), ('vault.png', [960])]:
    with Image.open(assets / source) as original:
        for size in sizes:
            image = original.convert('RGB')
            image.thumbnail((size, size), getattr(Image, 'Resampling', Image).LANCZOS)
            image.save(assets / f'{Path(source).stem}-{size}.webp', quality=84, method=6)

# A simple typographic preview mirrors the site's palette and existing content.
card = Image.new('RGB', (1200, 630), '#101114')
draw = ImageDraw.Draw(card)
font_dir = Path('/System/Library/Fonts/Supplemental')
# Fonts are explicit inputs so another machine can supply its own equivalents.
import os
regular = os.environ.get('PORTFOLIO_FONT_REGULAR', str(font_dir / 'Arial.ttf'))
bold = os.environ.get('PORTFOLIO_FONT_BOLD', str(font_dir / 'Arial Bold.ttf'))
def font(size, weight=False):
    return ImageFont.truetype(bold if weight else regular, size)
draw.rounded_rectangle((64, 64, 1136, 566), radius=28, fill='#1b1d22', outline='#343841', width=2)
draw.rounded_rectangle((112, 118, 172, 124), radius=3, fill='#a5c7ff')
draw.text((108, 174), 'Renato Diaz', font=font(84, True), fill='#f5f5f7')
draw.text((112, 286), 'Software Engineer', font=font(38), fill='#a5c7ff')
draw.text((112, 370), 'Projects, research, and career milestones.', font=font(28), fill='#b4b7c0')
draw.line((112, 452, 1088, 452), fill='#343841', width=2)
draw.text((112, 485), 'renatodiaz.com', font=font(24), fill='#b4b7c0')
card.save(root / 'public/social-preview.png', optimize=True)
